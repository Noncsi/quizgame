import { Component } from '@angular/core';
import { Question } from './question';
import {MatDialog} from '@angular/material/dialog';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
import { Player } from './player';
import { Category } from './categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizgame';

  categories: Category[] = [
    {id: 1, name: 'Dummy Category 1',
      question1: new Question(11, 1, 'dummy question 11', 'dummy answer', null, null ),
      question2: new Question(12, 2, 'dummy question 12', 'dummy answer', null, null ),
      question3: new Question(13, 3, 'dummy question 13', 'dummy answer', null, null ),
      question4: new Question(14, 4, 'dummy question 14', 'dummy answer', null, null ),
      question5: new Question(15, 5, 'dummy question 15', 'dummy answer', null, null ),
      question6: new Question(16, 6, 'dummy question 16', 'dummy answer', null, null ),
    },
    {id: 2, name: 'Dummy Category 2',
      question1: new Question(21, 1, 'dummy question 21', 'dummy answer', null, null ),
      question2: new Question(22, 2, 'dummy question 22', 'dummy answer', null, null ),
      question3: new Question(23, 3, 'dummy question 23', 'dummy answer', null, null ),
      question4: new Question(24, 4, 'dummy question 24', 'dummy answer', null, null ),
      question5: new Question(25, 5, 'dummy question 25', 'dummy answer', null, null ),
      question6: new Question(26, 6, 'dummy question 26', 'dummy answer', null, null ),
    }
  ]
  
  players: Player[] = [
    {id: 1, order: 1, name: 'Classmethod', points: 0, isActive: false},
    {id: 2, order: 2, name: 'Mariann', points: 0, isActive: false},
    {id: 3, order: 3, name: 'Peti', points: 0, isActive: false},
    {id: 4, order: 4, name: 'Pisti', points: 0, isActive: true},
    {id: 5, order: 5, name: 'Viki', points: 0, isActive: false}
  ]

  displayedColumns: string[] = ['category-name', 'level1', 'level2', 'level3', 'level4', 'level5', 'level6'];
  dataSource = this.categories;

  questions = [
    new Question(11, 1, 'dummy question 11', 'dummy answer', null, null ),
    new Question(12, 2, 'dummy question 12', 'dummy answer', null, null ),
    new Question(13, 3, 'dummy question 13', 'dummy answer', null, null ),
    new Question(14, 4, 'dummy question 14', 'dummy answer', null, null ),
    new Question(15, 5, 'dummy question 15', 'dummy answer', null, null ),
    new Question(16, 6, 'dummy question 16', 'dummy answer', null, null ),

    new Question(21, 1, 'dummy question 21', 'dummy answer', null, null ),
    new Question(22, 2, 'dummy question 22', 'dummy answer', null, null ),
    new Question(23, 3, 'dummy question 23', 'dummy answer', null, null ),
    new Question(24, 4, 'dummy question 24', 'dummy answer', null, null ),
    new Question(25, 5, 'dummy question 25', 'dummy answer', null, null ),
    new Question(26, 6, 'dummy question 26', 'dummy answer', null, null )
  ]


  
  constructor(public dialog: MatDialog) {}

  shoot(id) {
    const q = this.questions.find((q) => q.id === id)
    const dialogRef = this.dialog.open(QuestionDialogComponent, {
      data: {
        title: q.id, 
        question: q.question, 
        answer: q.correctAnswer}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        const currentPlayer = this.players.find((p) => p.isActive === true)
        currentPlayer.points++
      }
    });

  }

  nextPlayer() {
    const currentPlayer = this.players.find((p) => p.isActive === true)
    let next_player_order = currentPlayer.order + 1;
    if (next_player_order > this.players.length) {
      next_player_order = 1;
    }
    currentPlayer.isActive = false;
    const next_player = this.players.find((p) => p.order === next_player_order)
    next_player.isActive = true;
  }
}