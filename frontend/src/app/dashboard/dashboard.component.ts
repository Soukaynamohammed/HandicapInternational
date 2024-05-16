import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chapter, ChaptersService } from '../chapter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
  
})
export class DashboardComponent implements OnInit{
  
  chapters: Chapter[] = [];
  constructor(private router: Router, private chapter: ChaptersService) {}
  ngOnInit(): void {
    this.loadChapters();  }

  loadChapters(){
    this.chapter.getAllChapters()
      .subscribe(chapter => this.chapters = chapter);
  }

    navigateToChapter(chapter: number) {
      this.router.navigate(['/chapter', chapter]);
    
  }

 

 

}