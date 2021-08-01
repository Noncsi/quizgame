import { Category } from "./categories";
import { Player } from "./player";

export class Question {
    id: number;
    level: number;
    question: string;
    correctAnswer: string;
    isAnsweredRight: Boolean;
    answeredBy: Player;

    constructor(_id: number, _level: number, _question: string, _correctAnswer: string, _isAnsweredRight: Boolean, _answeredBy: Player) {
        this.id = _id;
        this.level = _level;
        this.question = _question;
        this.correctAnswer = _correctAnswer;
        this.isAnsweredRight = _isAnsweredRight;
        this.answeredBy = _answeredBy;
    }
  }