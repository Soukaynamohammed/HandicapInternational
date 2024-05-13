import { Component, OnInit } from '@angular/core';
import { ChaptersService } from '../chapters.service';

@Component({
  selector: 'app-chapter-button',
  templateUrl: './chapter-button.component.html',
  styleUrls: ['./chapter-button.component.scss']
})
export class ChapterButtonComponent implements OnInit {

  constructor(private chapterService: ChaptersService) { }

  chapterTitle: string= " - ";

  ngOnInit(): void {
    this.fetchChapterTitleById(1); // Fetch title for chapter with ID 1 (replace with actual chapter ID)
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
}
