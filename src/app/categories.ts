import { BasicQuestion } from "./question";

export class Category {
  id: number;
  name: string
  questions: BasicQuestion[];

  constructor(_id: number, _name: string, questions: BasicQuestion[]) {
    this.id = _id;
    this.name = _name;
    this.questions = questions;
  }

  numberOfUnansweredQuestions(column) {
    return this.questions.filter((q) => q.answeredBy == null && q.difficulty == column).length
  }
}