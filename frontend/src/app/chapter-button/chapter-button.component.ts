import { Component, OnInit } from '@angular/core';
import { ChaptersService } from '../chapters.service';
import {Chapter} from '../chapters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-button',
  templateUrl: './chapter-button.component.html',
  styleUrls: ['./chapter-button.component.scss']
})
export class ChapterButtonComponent implements OnInit{

  constructor(private chapterService: ChaptersService, private router: Router,  ) { }
  
  chapterTitle: string = "";

  ngOnInit(): void {
    this.fetchChapter();
  }

  chapters: Chapter[] =[];

  fetchChapter():void{
    this.chapterService.getAllChapters().subscribe(chapters =>{
      this.chapters = chapters;
    })
  }

  fetchChapterTitleById(id: number): void {
    this.chapterService.getChapterTitleById(id).subscribe(
      title => {
        this.chapterTitle = title;
      },
      error => {
        console.error('Ophalen van de titel van een chapter is misluk. Errorbericht: ', error);
      }
    );
  }

  navigateToChapter(chapter: number) {
    this.router.navigate(['/chapter', chapter]);
  }

}
