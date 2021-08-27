import { Injectable } from '@angular/core';
import { Player } from '../player';
import { BasicQuestion, FlagQuestion, IQuestion, SongQuestion } from '../question';
import { basicQuestionsByCategories } from '../questions/basic-questions';
import { flags } from '../questions/flag-questions';
import { songs } from '../questions/song-questions';

const playersKey: string = 'players';
const currentPlayerNameKey: string = 'currentPlayerName';
const currentStageKey: string = 'currentStage';
const currentQuestionKey: string = 'currentQuestion';
const answeredQuestionsKey: string = 'askedQuestions';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  getStage() {
    return parseInt(localStorage.getItem(currentStageKey))
  }

  setStage(currentStage: GameStage) {
    localStorage.setItem(currentStageKey, currentStage.toString())
  }

  getPlayers(): Player[] {
    let playersList: Player[] = [];
    const players = JSON.parse(localStorage.getItem(playersKey)); // map
    players.forEach(playerObject => {
      playersList.push(new Player(playerObject['name'], playerObject['points']))
    });
    return playersList;
  }

  setPlayers(players: Player[]) {
    localStorage.setItem(playersKey, JSON.stringify(players))
  }

  getCurrentPlayer(): Player {
    const currentPlayerName = localStorage.getItem(currentPlayerNameKey);
    const currentPlayer = this.getPlayers().find((p) => p.name === currentPlayerName)
    return currentPlayer
  }

  setCurrentPlayer(currentPlayer: Player) {
    localStorage.setItem(currentPlayerNameKey, currentPlayer.name)
  }

  getCurrentQuestion(): IQuestion {
    const currentQuestion = JSON.parse(localStorage.getItem(currentQuestionKey));
    const type = currentQuestion['type'];
    const id = currentQuestion['id']
    switch (type) {
      case 0:
        const cat = basicQuestionsByCategories.find((c)=>c.id === parseInt(id.toString()[0]))
        return cat.questions.find((q)=>q.id === id)
      case 1:
        return flags.find((f)=>f.id === id)
      case 2:
        return songs.find((f)=>f.id === id)
    }
  }

  setCurrentQuestion(currentQuestion: IQuestion) {
    localStorage.setItem(currentQuestionKey, JSON.stringify(currentQuestion))
  }

  getAnsweredQuestions(): IQuestion[] {
    let askedQuestions: IQuestion[] = []
    const questions = JSON.parse(localStorage.getItem(answeredQuestionsKey));
    if (questions) {
      questions.forEach(o => {
        switch (o['type']) {
          case 0:
            askedQuestions.push(new BasicQuestion(o['id'], o['difficulty'], o['question'], o['answer']));
            break;
          case 1:
            askedQuestions.push(new FlagQuestion(o['id'], o['country'], o['flagCode']));
            break;
          case 2:
            askedQuestions.push(new SongQuestion(o['id'], o['track']));
            break;
        }
      });
      return askedQuestions;
    }
    return askedQuestions;
  }

  addAskedQuestion(askedQuestion: IQuestion) {
    let list: IQuestion[] = this.getAnsweredQuestions();
    list.push(askedQuestion)
    localStorage.setItem(answeredQuestionsKey, JSON.stringify(list))
  }
}

export const enum GameStage {
  notStarted = 0,
  started = 1,

}
