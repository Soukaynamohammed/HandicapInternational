import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfoCard } from '../../Services/infocard.service';


@Component({
  selector: 'app-error-bericht-quiz',
  templateUrl: './error-bericht-quiz.component.html',
  styleUrl: './error-bericht-quiz.component.scss'
})
export class ErrorBerichtQuizComponent {

  constructor(
    public dialogRef: MatDialogRef<ErrorBerichtQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InfoCard
  ) { }

  errorBericht: string = "Answer all the questions before you can continue.";


  onClose() {
    this.dialogRef.close();
  }

}
