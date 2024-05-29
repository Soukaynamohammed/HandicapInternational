import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrl: './base-dialog.component.scss'
})
export class BaseDialogComponent {
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, content: string, imageUrl: string }, public dialogRef: MatDialogRef<BaseDialogComponent>) {}
  onClose() {
    this.dialogRef.close();
  }
}
