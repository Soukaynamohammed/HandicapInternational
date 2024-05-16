import { Component, Input, OnInit } from '@angular/core';
import {NavbarComponent} from '../../navbar/navbar.component';
import { ChaptersService } from '../../Services/chapters.service';
import {Chapter} from  '../../Services/chapters.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent implements OnInit{

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private chapterService: ChaptersService ) { }

    chapters: Chapter[] =[];
    chapterId: number = 0 ;
    currentQuestionIndex: number = 0;

    ngOnInit(): void {
      this.chapterId = +this.route.snapshot.paramMap.get('id')!;
      this.fetchChapter();
    }

    fetchChapter(): void{
      this.chapterService.getAllChapters().subscribe(chapters =>{
        this.chapters = chapters;
  
      })
    }
}