import { Component, OnInit } from '@angular/core';
import { InfoCard,InfocardService } from '../../Services/infocard.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lessen',
  templateUrl: './lessen.component.html',
  styleUrl: './lessen.component.scss'
})
export class LessenComponent implements OnInit {
  
  constructor(private infoCardService: InfocardService, private http:HttpClient, private route: ActivatedRoute,private router: Router) { }

  infoCards: InfoCard[] = [];
  chapterId: number =0;
  currentPageIndex: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.chapterId = +params['id'];
      this.infoCardService.getInfoCardsByChapterId(this.chapterId)
      .subscribe(infoCards => this.infoCards = infoCards);
    });
  }
  goToNextQuestion(): void {
    if (this.currentPageIndex < this.infoCards.length - 1) {
      this.currentPageIndex++;
    }
  }

  goToPreviousQuestion(): void {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
    }
  }
  navigateToQuiz(): void {
    this.router.navigate(['/quiz', this.chapterId]);
  }
}