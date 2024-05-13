import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { GameComponent } from '../game/game.component';
import { LessenComponent } from '../lessen/lessen.component'
import { ChaptersService } from '../../Services/chapters.service';
import {Chapter} from  '../../Services/chapters.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class ChapterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,private chapterService: ChaptersService) { }

  chapterId: number = 0 ;
  chapters: Chapter[] =[];

  ngOnInit(): void {
    this.chapterId = +this.route.snapshot?.paramMap.get('id')!;
    this.fetchChapter()
  }
  
  navigateToQuiz(): void {
    this.router.navigate(['/quiz', this.chapterId]);
  }

  fetchChapter():void{
    this.chapterService.getAllChapters().subscribe(chapters =>{
      this.chapters = chapters;
    })
  }
}