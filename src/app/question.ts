import { Player } from "./player";

export class Question {
    id: number;
    level: number;
    question: string;
    answer: string;
    isAnsweredRight: Boolean;
    answeredBy: Player;

    constructor(id: number, level: number, question: string, answer: string, isAnsweredRight: Boolean, answeredBy: Player) {
        this.id = id;
        this.level = level;
        this.question = question;
        this.answer = answer;
        this.isAnsweredRight = isAnsweredRight;
        this.answeredBy = answeredBy;
    }
  }

export enum QuestionType {
  basic, flag, song
}

