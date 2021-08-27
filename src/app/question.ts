import { Player } from "./player";
import { Track } from "./track";

export class Question {
  question: string;
  answer: string;
}

export interface IQuestion {
  id: number;
  type: QuestionType;
  answeredBy: Player;
  getPoints(asd: boolean): any;
  losePoints(asd: boolean): any;
}


export class BasicQuestion extends Question implements IQuestion {
  id: number;
  type: QuestionType;
  answeredBy: Player;
  difficulty: number;
  constructor(id: number, difficulty: QuestionDifficulty, question: string, answer: string) {
    super()
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.type = QuestionType.basic
    this.difficulty = difficulty;
    this.answeredBy = null;
  }

  public getPoints() {
    switch (this.difficulty) {
      case QuestionDifficulty.difficulty_1:
        return 1;
      case QuestionDifficulty.difficulty_2:
        return 3;
      case QuestionDifficulty.difficulty_3:
        return 5;
    }
  }

  public losePoints() {
    switch (this.difficulty) {
      case QuestionDifficulty.difficulty_1:
        return 0;
      case QuestionDifficulty.difficulty_2:
        return -2;
      case QuestionDifficulty.difficulty_3:
        return -3;
    }
  }
}

export class FlagQuestion extends Question implements IQuestion {
  id: number;
  type: QuestionType;
  answeredBy: Player;
  isFirst: boolean;
  image: string;
  flagCode: string;
  constructor(id: number, country: string, flagCode: string) {
    super()
    this.id = id;
    this.question = 'Melyik országé ez a zászló?';
    this.answer = country;
    this.type = QuestionType.flag;
    this.answeredBy = null;
    this.flagCode = flagCode
    this.image = `../../../assets/country-flags-main/country-flags-main/svg/${this.flagCode.toLowerCase()}.svg`
  }


  public getPoints(isFirst: boolean) {
    if (isFirst === null) {
      return -2
    }
    return isFirst ? 4 : 2;
  }

  public losePoints() {
    return -2
  }
}

export class SongQuestion extends Question implements IQuestion {
  id: number;
  type: QuestionType;
  answeredBy: Player;
  track: Track;
  constructor(id: number, track: Track) {
    super()
    this.id = id;
    this.question = 'Mi ennek a dalnak a címe, illetve ki az előadója?';
    this.answer = '<< Válasz a Spotify alkalmazásban >>';
    this.type = QuestionType.song;
    this.answeredBy = null;
    this.track = track;
  }

  public getPoints(isBoth: boolean) {
    return isBoth ? 4 : 2;
  }

  public losePoints() {
    return -2
  }
}

export enum QuestionType {
  basic, flag, song
}

export enum QuestionDifficulty {
  difficulty_1 = 1, 
  difficulty_2 = 2, 
  difficulty_3 = 3
}
