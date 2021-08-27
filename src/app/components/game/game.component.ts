import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { concatMap, delay, map, switchMap, tap } from 'rxjs/operators'

import { Player } from 'src/app/player';
import { Track } from 'src/app/track';
import { FlagQuestion, IQuestion, QuestionType, SongQuestion } from 'src/app/question';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';
import { GameStage, QuizService } from 'src/app/services/quiz.service';
import { basicQuestionsByCategories } from 'src/app/questions/basic-questions';
import { flags } from 'src/app/questions/flag-questions';
import { songs } from 'src/app/questions/song-questions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  title = 'quizgame';

  QuestionType = QuestionType
  currentQuestionType: string;

  playerList: Player[] = [];
  newPlayerName: string = '';
  currentPlayer: Player;

  displayedColumns: string[] = ['Kategória', '1', '2', '3'];
  dataSource = basicQuestionsByCategories;
  hasGameStarted = false;
  currentQuestion: IQuestion;
  wasFlagRerolled = false;

  // spotify
  accessToken;
  refreshToken;
  deviceId;
  loadedTrack: Track;
  tracks: Track[];

  constructor(public dialog: MatDialog, private apiService: ApiHttpService, private quizService: QuizService) {
    if (this.quizService.getStage() === GameStage.started) {
      this.hasGameStarted = true;
      this.playerList = this.quizService.getPlayers();
      this.currentPlayer = this.quizService.getCurrentPlayer();
    }

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
    const newPlayer = new Player(name, 0)
    this.currentPlayer = newPlayer // because of html bug
    this.playerList.push(newPlayer);
  }

  deletePlayer(player: Player) {
    const index = this.playerList.indexOf(player)
    this.playerList.splice(index, 1)
  }

  drop(event: CdkDragDrop<Player[]>) {
    moveItemInArray(this.playerList, event.previousIndex, event.currentIndex);
  }

  startGame() {
    this.hasGameStarted = true;
    this.quizService.setStage(GameStage.started)
    this.currentPlayer = this.playerList[0];
    this.quizService.setPlayers(this.playerList);
    this.quizService.setCurrentPlayer(this.playerList[0]);
  }

  nextPlayer() {
    const currentplayerInList = this.playerList.find((p) => p.name === this.quizService.getCurrentPlayer().name);
    const idx = this.playerList.indexOf(currentplayerInList)
    this.playerList[idx] = { ...this.playerList[idx] };
    const nextPlayer = idx + 1 >= this.playerList.length ? this.playerList[0] : this.playerList[idx + 1]
    this.currentPlayer = nextPlayer;
    this.quizService.setCurrentPlayer(nextPlayer);
  }

  // Quizgame_HUN_TEST: 2Eh2Qd3GiklW9N2qfhDFde
  // Quizgame: 0D5YwPQJ3XZQOlr4IikPzv
  loadRandomTrackFromPlaylist(playlistId = '0D5YwPQJ3XZQOlr4IikPzv') {
    this.apiService.getPlaylistTracks(this.accessToken, playlistId)
      .pipe(
        map(result => result["items"][Math.floor(Math.random() * result["items"].length)].track.id),
        concatMap(trackId => this.apiService.getTrack(this.accessToken, trackId)),
        tap(track => {
          let newTrack = new Track(track)
          let songQuestion = new SongQuestion(songs.length + 1, newTrack)
          songs.push(songQuestion)
          this.loadedTrack = newTrack;
          this.currentQuestion = songQuestion;
          this.quizService.setCurrentQuestion(songQuestion);
        }),
        concatMap(track => this.apiService.addToQueue(this.accessToken, `spotify:track:${track['id']}`, this.deviceId))
      )
      .subscribe()
  }

  play() {
    this.apiService.next(this.accessToken).pipe(delay(3000), switchMap(() => this.apiService.pause(this.accessToken))).subscribe()
  }

  // QUESTION
  shoot(QuestionTypeInString: string, categoryAndLevel: string) {
    switch (parseInt(QuestionTypeInString)) {
      case QuestionType.basic: {
        const coordinate = categoryAndLevel.split('.', 2);
        const category = basicQuestionsByCategories.find((c) => c.id == parseInt(coordinate[0]));
        const questionsInDifficulty = category.questions.filter((q) => q.difficulty === parseInt(coordinate[1]) && q.answeredBy === null);
        const currentQuestion = questionsInDifficulty[Math.floor(Math.random() * questionsInDifficulty.length)];
        this.currentQuestion = currentQuestion;
        this.quizService.setCurrentQuestion(this.currentQuestion);
        break;
      }

      case QuestionType.flag: {
        this.selectRandomFlag();
        this.currentQuestion = this.selectRandomFlag();
        this.quizService.setCurrentQuestion(this.currentQuestion);
        break;
      }

      case QuestionType.song: {
        // currentQuestion is saved by loadRandomTrackFromPlaylist()
        this.play();
        break;
      }
    }

    const dialogRef = this.dialog.open(QuestionDialogComponent, {
      data: this.currentQuestion
    });


    dialogRef.afterClosed().subscribe(result => {
      let currentQuestion = this.quizService.getCurrentQuestion();
      let currentPlayer = this.quizService.getCurrentPlayer();
      if (result) {
        let points = 0;
        if (result !== 'incorrect') { // correct or reroll_flag
          if (result === 'reroll_flag') {
            this.wasFlagRerolled = true;
            console.log(`Flag question with id:${currentQuestion.id} was rerolled.`);
          }
          if (result.includes('correct')) {
            if (this.wasFlagRerolled || result === 'correct_one') {
              points = currentQuestion.getPoints(false)
            } else {
              points = currentQuestion.getPoints(true)
            }
            this.wasFlagRerolled = false;
          }
        }
        else { // incorrect
          points = currentQuestion.losePoints(null);
        }
        currentQuestion.answeredBy = currentPlayer;
        if (currentPlayer.points + points > 0) {
          this.playerList.find((p) => p.name === currentPlayer.name).points += points;
        } else {
          this.playerList.find((p) => p.name === currentPlayer.name).points = 0;
        }
        this.quizService.setPlayers(this.playerList);
        this.quizService.addAskedQuestion(currentQuestion);
        this.removeAnsweredQuestions();

        console.log(`Result: ${result}, Points: ${points}, Answered by ${currentPlayer.name}.`);
      }
      else { // close modal
        console.log(`Question with id:${currentQuestion.id} was opened, but not answered.`);
      }
    });
  }

  removeAnsweredQuestions() {
    // let answeredQuestions = this.quizService.getAnsweredQuestions();
    // let answeredBasics = answeredQuestions.filter((q) => q.type === QuestionType.basic);

    // let answeredFlags = answeredQuestions.filter((q) => q.type === QuestionType.flag);
    // for (let i = 0; i <= answeredFlags.length; i++) {
    // let removing = this.duplicateOfFlags.find((f)=>f.id === answeredFlags[i].id)
    // let idx = this.duplicateOfFlags.indexOf(removing)
    // this.duplicateOfFlags.splice(idx, 1)
    // }

    // let answeredSongs = answeredQuestions.filter((q) => q.type === QuestionType.song);
    // songs.length = 0
    // answeredSongs.forEach(song => {
    //   songs.push(song)
    // });
  }

  // FLAG
  duplicateOfFlags: IQuestion[] = Object.assign([], flags)

  selectRandomFlag() {
    if (this.duplicateOfFlags.length > 0) {
      const currentFlag = this.duplicateOfFlags[Math.floor(Math.random() * (this.duplicateOfFlags.length))];
      this.quizService.setCurrentQuestion(currentFlag);
      // remove from list
      const index = this.duplicateOfFlags.indexOf(currentFlag)
      this.duplicateOfFlags.splice(index, 1)

      return currentFlag;
    }
  }

  resetList() {
    this.duplicateOfFlags = Object.assign([], flags);
  }
}
