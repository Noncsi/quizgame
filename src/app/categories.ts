import { Question, QuestionType } from "./question";

export class Category {
    id: number;
    name: string
    questions: Question[];

    constructor(_id: number, _name: string, questions: Question[]) {
        this.id = _id;
        this.name = _name;
        this.questions = questions;
    }
}

export const categories: Category[] = [{
    id: 1,
    name: 'Celebek',
    questions: [
      new Question(11, 1, 'Hány tagú Győzike családja?', '4', null, null),
      new Question(12, 2, 'Berki Krisztiánnak van egy saját műsora, amit a SlágerTV csatornán sugároznak. Mi ennek a neve?', 'Überkirály', null, null),
      new Question(13, 3, 'Mi a beceneve Bódi Lászlónak, a Republic elhunyt frontemberének?', 'Cipő', null, null),
      new Question(14, 4, 'dummy question 14', 'dummy answer', null, null),
      new Question(15, 5, 'dummy question 15', 'dummy answer', null, null),
      new Question(16, 6, 'Nevezz meg egy magyar közéleti személyiséget, aki kancsal.', 'Matolcsy György, Schmidt Mária', null, null),
    ]
  },
  {
    id: 2,
    name: 'Idegen szavak',
    questions: [
      new Question(21, 1, 'dummy question 21', 'dummy answer', null, null),
      new Question(22, 2, 'dummy question 22', 'dummy answer', null, null),
      new Question(23, 3, 'dummy question 23', 'dummy answer', null, null),
      new Question(24, 4, 'dummy question 24', 'dummy answer', null, null),
      new Question(25, 5, 'dummy question 25', 'dummy answer', null, null),
      new Question(26, 6, 'dummy question 26', 'dummy answer', null, null),
    ]
  },
  {
    id: 3,
    name: 'Szlogen',
    questions: [
      new Question(31, 1, 'dummy question 31', 'dummy answer', null, null),
      new Question(32, 2, 'dummy question 32', 'dummy answer', null, null),
      new Question(33, 3, 'dummy question 33', 'dummy answer', null, null),
      new Question(34, 4, 'dummy question 34', 'dummy answer', null, null),
      new Question(35, 5, 'dummy question 35', 'dummy answer', null, null),
      new Question(36, 6, 'dummy question 36', 'dummy answer', null, null),
    ]
  }
  ]