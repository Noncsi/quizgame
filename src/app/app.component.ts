import { Component } from '@angular/core';
import { Question } from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizgame';
  questions = [
    new Question(11, 'dummy question 1', 'dummy answer', null, null ),
    new Question(12, 'dummy question 2', 'dummy answer', null, null ),
    new Question(13, 'dummy question 3', 'dummy answer', null, null )
  ]

  shoot(id) {
    console.log(id);
    const question = this.questions.find((q) => q.id === id)
    console.log(question.question);
  }
}