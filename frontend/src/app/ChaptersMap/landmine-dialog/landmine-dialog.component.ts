import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfoCard } from '../../Services/infocard.service';

@Component({
  selector: 'app-landmine-dialog',
  templateUrl: './landmine-dialog.component.html',
  styleUrl: './landmine-dialog.component.scss'
})
export class LandmineDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LandmineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InfoCard
  ) { }

  onClose() {
    this.dialogRef.close();
  }
}
