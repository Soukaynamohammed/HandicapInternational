import { Injectable } from '@angular/core';
import { BaseDialogComponent } from '../base-dialog/base-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { InfoCard } from './infocard.service';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(public dialog: MatDialog) { }

  openGameExplanationDialog(): void {
    const dialogRef = this.dialog.open(BaseDialogComponent, {
      width: '400px',
      data: {
        title: 'Explanation',
        content: `<p>Make sure that farmer Jan can get to his farmland safely!</p> <p>Try to find a safe way by clicking the boxes. The blue box means a safe way. When turning red, you stepped on a landmine.</p>`,
        imageUrl: 'assets/GamePic.png'  
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openLandmineDialog(infoCard: InfoCard): void {
    const dialogRef = this.dialog.open(BaseDialogComponent, {
      width: '400px',
      data: {
        title: infoCard.subtitle,  // Assuming InfoCard has a title property
        content: infoCard.alineaText,  // Assuming InfoCard has a content property (could be HTML)
        imageUrl: 
        'assets/quizpics/' +
          infoCard.chapter.id +
          '/' +
          infoCard.orderNumber +
          '.jpg'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openInvalidMove(): void{
    const dialogRef = this.dialog.open(BaseDialogComponent, {
      width: '400px',
      data: {
        title: "Invalid Move!",  // Assuming InfoCard has a title property
        content: "You can only move to an adjacent square (Left, right, above and under the farmer)" ,  // Assuming InfoCard has a content property (could be HTML)
        imageUrl: ""  // Assuming InfoCard has an imageUrl property
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
