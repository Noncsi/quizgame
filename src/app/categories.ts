import { Question } from "./question";

export class Category {
  id: number;
  name: string
  questions: Question[];

  constructor(_id: number, _name: string, questions: Question[]) {
    this.id = _id;
    this.name = _name;
    this.questions = questions;
  }

  numberOfUnansweredQuestions(column) {
    return this.questions.filter((q) => q.answeredBy == null && q.level == column).length
  }
}

export const categories = [
  new Category(1, 'Celebek', [
    new Question(111, 1, 'cat 1 level 1 question 1', '.', null, null),
    new Question(112, 1, 'cat 1 level 1 question 2', '.', null, null),
    new Question(113, 1, 'cat 1 level 1 question 3', '.', null, null),
    new Question(114, 1, 'cat 1 level 1 question 4', '.', null, null),
    new Question(115, 1, 'cat 1 level 1 question 5', '.', null, null),
    new Question(116, 1, 'cat 1 level 1 question 6', '.', null, null),
    new Question(121, 2, 'cat 1 level 2 question 1', '.', null, null),
    new Question(122, 2, 'cat 1 level 2 question 2', '.', null, null),
    new Question(123, 2, 'cat 1 level 2 question 3', '.', null, null),
    new Question(124, 2, 'cat 1 level 2 question 4', '.', null, null),
    new Question(125, 2, 'cat 1 level 2 question 5', '.', null, null),
    new Question(126, 2, 'cat 1 level 2 question 6', '.', null, null),
    new Question(131, 3, 'cat 1 level 3 question 1', '.', null, null),
    new Question(132, 3, 'cat 1 level 3 question 2', '.', null, null),
    new Question(133, 3, 'cat 1 level 3 question 3', '.', null, null),
    new Question(134, 3, 'cat 1 level 3 question 4', '.', null, null),
    new Question(135, 3, 'cat 1 level 3 question 5', '.', null, null),
    new Question(136, 3, 'cat 1 level 3 question 6', '.', null, null),
  ]),
  new Category(2, 'Idegen szavak', [
    new Question(211, 1, 'cat 2 level 1 question 1', '.', null, null),
    new Question(212, 1, 'cat 2 level 1 question 2', '.', null, null),
    new Question(213, 1, 'cat 2 level 1 question 3', '.', null, null),
    new Question(214, 1, 'cat 2 level 1 question 4', '.', null, null),
    new Question(215, 1, 'cat 2 level 1 question 5', '.', null, null),
    new Question(216, 1, 'cat 2 level 1 question 6', '.', null, null),
    new Question(221, 2, 'cat 2 level 2 question 1', '.', null, null),
    new Question(222, 2, 'cat 2 level 2 question 2', '.', null, null),
    new Question(223, 2, 'cat 2 level 2 question 3', '.', null, null),
    new Question(224, 2, 'cat 2 level 2 question 4', '.', null, null),
    new Question(225, 2, 'cat 2 level 2 question 5', '.', null, null),
    new Question(226, 2, 'cat 2 level 2 question 6', '.', null, null),
    new Question(231, 3, 'cat 2 level 3 question 1', '.', null, null),
    new Question(232, 3, 'cat 2 level 3 question 2', '.', null, null),
    new Question(233, 3, 'cat 2 level 3 question 3', '.', null, null),
    new Question(234, 3, 'cat 2 level 3 question 4', '.', null, null),
    new Question(235, 3, 'cat 2 level 3 question 5', '.', null, null),
    new Question(236, 3, 'cat 2 level 3 question 6', '.', null, null),
  ])
]