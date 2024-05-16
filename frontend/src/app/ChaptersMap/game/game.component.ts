import { Component, OnInit } from '@angular/core';
import confetti from 'canvas-confetti';
import { InfoCard, InfocardService } from '../../Services/infocard.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LandmineDialogComponent } from '../landmine-dialog/landmine-dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit{
  farmerPosition = { row: 6, col: 6 }; // Initial position of the farmer
  isGameStarted = false; // Indicates whether the game has started
  isCorrectPath: boolean[][] = [];
  infoCards: InfoCard[] = [];
  pressedmines:number = 0;
  
  constructor( public dialog: MatDialog, private infoCardService: InfocardService, private http:HttpClient, private route: ActivatedRoute) {
    
    this.initializeCorrectPath();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.infoCardService.getInfoCardsByChapterId(1)
      .subscribe(infoCards => this.infoCards = infoCards);
    });
  }

  isSafePath(row: number, col: number): boolean {
    const safePath = [
      [6, 6], [6, 5], 
      [5, 1], [5, 2], [5, 3],[5, 5],
      [4, 1], [4, 3], [4, 4], [4, 5], 
      [3, 1], [3, 2], 
      [2, 2], [2, 3], 
      [1, 1], [1, 2], [1, 3]
    ];
    return safePath.some((coord) => coord[0] === row && coord[1] === col);
  }

  initializeCorrectPath(): void {
    for (let row = 1; row <= 6; row++) {
      this.isCorrectPath[row] = [];
      for (let col = 1; col <= 6; col++) {
        this.isCorrectPath[row][col] = false; // Initialize all squares as not visited
      }
    }
    this.isCorrectPath[6][6] = true;
  }
  moveFarmer(row: number, col: number): void {
    // Game starts when the first move is made
    this.isGameStarted = true;

    // Implement logic to move the farmer
    if ((Math.abs(this.farmerPosition.row - row) === 1 && this.farmerPosition.col === col) ||
        (Math.abs(this.farmerPosition.col - col) === 1 && this.farmerPosition.row === row)) {
      if (this.isSafePath(row, col)) {
        this.farmerPosition = { row, col };
        if (row === 1 && col === 1) {
          this.triggerConfetti();
        }
      } else {
        this.openLandmineDialog(this.infoCards[this.pressedmines]);
        this.pressedmines++;
      }
      this.isCorrectPath[row][col] = true; // Mark the square as visited
    } else {
      // Display modal with information about invalid move
      alert('Invalid move! You can only move to an adjacent square.');
    }
  }
  triggerConfetti(): void {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

  }
  openLandmineDialog(infoCard: InfoCard): void {
    const dialogRef = this.dialog.open(LandmineDialogComponent, {
      width: '400px',
      data: infoCard
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}