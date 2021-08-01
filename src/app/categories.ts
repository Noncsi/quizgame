import { Question } from "./question";

export class Category {
    id: number;
    name: string
    question1: Question;
    question2: Question;
    question3: Question;
    question4: Question;
    question5: Question;
    question6: Question;

    constructor(_id: number, _name: string, _question1: Question, _question2: Question,_question3: Question, _question4: Question, _question5: Question, _question6: Question) {
        this.id = _id;
        this.name = _name;
        this.question1 = _question1;
        this.question2 = _question2;
        this.question3 = _question3;
        this.question4 = _question4;
        this.question5 = _question5;
        this.question6 = _question6;
    }
  }