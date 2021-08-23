import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { concatMap, delay, map, switchMap, tap } from 'rxjs/operators'

import { categories } from 'src/app/categories';
import { Flag, flags } from 'src/app/flag';
import { Player, players } from 'src/app/player';
import { QuestionType } from 'src/app/question';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { Track } from 'src/app/track';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  title = 'quizgame';

  hasGameStarted = false;

  QuestionType = QuestionType
  players = players
  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6'];
  dataSource = categories;
  currentQuestionType: string;

  newPlayerName: string = '';

  // spotify
  accessToken;
  refreshToken;
  deviceId;
  loadedTrack: Track;
  tracks: Track[];

  constructor(public dialog: MatDialog, private apiService: ApiHttpService) {
    const code = new URL(window.location.href).searchParams.get("code");
    this.apiService.exchangeCodeForTokens(code)
      .pipe(
        tap(
          (result: { access_token: string, refresh_token: string }) => {
            this.accessToken = result.access_token;
            this.refreshToken = result.refresh_token;
          }
        ), concatMap(() => this.apiService.getDeviceId(this.accessToken))).subscribe((result: { devices: { id: string }[] }) => {
          this.deviceId = result.devices[0].id;
          console.log(result);
        });
  }

  addNewPlayer(name: string) {
    const newPlayer = new Player(this.players.length, name, 0, false)
    this.players.push(newPlayer);
    
  }

  deletePlayer(player: Player) {
    const index = players.indexOf(player)
    this.players.splice(index, 1)
  }

  drop(event: CdkDragDrop<Player[]>) {
    moveItemInArray(players, event.previousIndex, event.currentIndex);
    console.log(event)
    console.log(players)
  }

  startGame() {
    this.hasGameStarted = true;
    players[0].isActive = true;
  }

  nextPlayer() {
    const currentPlayer = players.find((p) => p.isActive)
    let nextPlayerIndex = players.indexOf(currentPlayer) + 1
    if (nextPlayerIndex >= players.length) {
      nextPlayerIndex = 0;
    }
    currentPlayer.isActive = false;
    const nextPlayer = players[nextPlayerIndex];
    nextPlayer.isActive = true;
  }

  // Quizgame_HUN_TEST: 2Eh2Qd3GiklW9N2qfhDFde
  // Quizgame: 0D5YwPQJ3XZQOlr4IikPzv
  loadRandomTrackFromPlaylist(playlistId = '2Eh2Qd3GiklW9N2qfhDFde') {
    this.apiService.getPlaylistTracks(this.accessToken, playlistId)
      .pipe(
        map(result => result["items"][Math.floor(Math.random() * result["items"].length)].track.id),
        concatMap(trackId => this.apiService.getTrack(this.accessToken, trackId)),
        tap(track => this.loadedTrack = new Track(track)),
        concatMap(track => this.apiService.addToQueue(this.accessToken, `spotify:track:${track['id']}`, this.deviceId))
      )
      .subscribe()
  }

  play() {
    this.apiService.next(this.accessToken).pipe(delay(3000), switchMap(() => this.apiService.pause(this.accessToken))).subscribe()
  }

  // QUESTION
  shoot(categoryAndLevel: string, type: string) {
    let questionData: any = { currentQuestionType: type }
    switch (parseInt(type)) {
      case QuestionType.basic: {
        const coordinate = categoryAndLevel.split('.',2)
        const category = categories.find((c) => c.id == parseInt(coordinate[0]))
        const q = category.questions.find((q) => q.level === parseInt(coordinate[1]))
        questionData = {
          ...questionData,
          question: q.question,
          answer: q.answer,
          id: q.id
        }
        break;
      }

      case QuestionType.flag: {
        const flag = this.selectRandomFlag()
        questionData = {
          ...questionData,
          question: 'Melyik ország zászlaja ez?',
          answer: flag.country,
          flagImage: flag.src
        }
        break;
      }

      case QuestionType.song: {
        this.play();
        questionData = {
          ...questionData,
          question: 'Mi ennek a zeneszámnak a címe?',
          answer: '<< válasz a Spotify alkalmazásban >>'
        }
        break;
      }
    }

    const dialogRef = this.dialog.open(QuestionDialogComponent, {
      data: questionData,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const currentPlayer = this.players.find((p) => p.isActive)
        currentPlayer.points++
      }
    });
  }


  // FLAG
  duplicateOfFlags: Flag[] = Object.assign([], flags)

  selectRandomFlag() {
    if (this.duplicateOfFlags.length > 0) {
      const currentCountry = this.duplicateOfFlags[Math.floor(Math.random() * (this.duplicateOfFlags.length))];
      const currentCountrySrc = `../../../assets/country-flags-main/country-flags-main/svg/${currentCountry.code.toLowerCase()}.svg`;
      const index = this.duplicateOfFlags.indexOf(currentCountry)
      this.duplicateOfFlags.splice(index, 1)

      return { src: currentCountrySrc, country: currentCountry.name };
    }
  }

  resetList() {
    this.duplicateOfFlags = Object.assign([], flags);
  }

}
