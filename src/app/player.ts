import { Question } from "./question";

export class Player {
    id: number;
    name: string;
    correctlyAnsweredQuestions: Question[]
    wronglyAnsweredQuestions : Question[]
    points: number;
  }