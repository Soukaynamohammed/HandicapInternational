import { Component, OnInit } from '@angular/core';
import { ChaptersService } from '../../Services/chapters.service';
import {Chapter} from  '../../Services/chapters.service';
import { Router } from '@angular/router';
import { ProgressService } from '../../Services/progress.service';
import { Progress } from '../../Services/progress.service'


@Component({
  selector: 'app-chapter-button',
  templateUrl: './chapter-button.component.html',
  styleUrls: ['./chapter-button.component.scss']
})
export class ChapterButtonComponent implements OnInit{

  constructor(private chapterService: ChaptersService, private router: Router, private progressService: ProgressService ) { }
  
  chapterTitle: string = "";
  chapters: Chapter[] =[];
  progresses: Progress[] = [];


  ngOnInit(): void {
    this.fetchChapter();
  }

  fetchProgress(){
    this.progressService.getAllProgress().subscribe(progress => {
      this.progresses = progress
    })
  }

  fetchChapter():void{
    this.chapterService.getAllChapters().subscribe(chapters =>{
      this.chapters = chapters;
    })
  }

  // fetchChapterTitleById(id: number): void {
  //   this.chapterService.getChapterTitleById(id).subscribe(
  //     title => {
  //       this.chapterTitle = title;
  //     },
  //     error => {
  //       console.error('Ophalen van de titel van een chapter is misluk. Errorbericht: ', error);
  //     }
  //   );
  // }

  navigateToChapter(chapter: number) {
    this.router.navigate(['/chapter', chapter]);
  }

}
