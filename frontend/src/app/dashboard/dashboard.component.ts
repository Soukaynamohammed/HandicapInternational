import { Component, OnInit } from '@angular/core';
import { Chapter, ChapterService } from '../chapter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  
  chapters!: Chapter[];

  constructor(private chapterService: ChapterService) { console.log("Chapter 1: "+ this.chapters) }

  ngOnInit(): void {
    this.loadChapters();
    console.log("Chapter: "+ this.chapters)
  }

  loadChapters(): void {
    this.chapterService.getAllChapters().subscribe(chapters => {
      this.chapters = chapters;
    });
  }

}