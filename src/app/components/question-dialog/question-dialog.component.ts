import { AfterViewInit, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionType } from 'src/app/question';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.css']
})
export class QuestionDialogComponent implements AfterViewInit{ 

  QuestionType = QuestionType

    // Workaround for angular component issue #13870
    disableAnimation = true;

  
  constructor(
    public dialogRef: MatDialogRef<QuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

    ngAfterViewInit(): void {
      // timeout required to avoid the dreaded 'ExpressionChangedAfterItHasBeenCheckedError'
      setTimeout(() => this.disableAnimation = false);
    }

}
