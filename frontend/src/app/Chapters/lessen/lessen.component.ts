import { Component, OnInit } from '@angular/core';
import { InfoCard,InfocardService } from '../../Services/infocard.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lessen',
  templateUrl: './lessen.component.html',
  styleUrl: './lessen.component.scss'
})
export class LessenComponent implements OnInit {
  infoCards: InfoCard[] = [];
  chapterId: number =0;
  constructor(private infoCardService: InfocardService, private http:HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.chapterId = +params['id'];
      this.infoCardService.getInfoCardsByChapterId(this.chapterId)
      .subscribe(infoCards => this.infoCards = infoCards);
    });
  }
 
}