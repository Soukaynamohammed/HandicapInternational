import { Component, Input, OnInit } from '@angular/core';
import { ChaptersService } from '../../Services/chapters.service';
import {Chapter} from  '../../Services/chapters.service';
import { Router } from '@angular/router';
import { ProgressService } from '../../Services/progress.service';
import { Progress } from '../../Services/progress.service';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-chapter-button',
  templateUrl: './chapter-button.component.html',
  styleUrls: ['./chapter-button.component.scss']
})
export class ChapterButtonComponent implements OnInit{

  constructor(private chapterService: ChaptersService, private router: Router, private progressService: ProgressService,private authService: AuthService ) { }

  chapterTitle: string = "";
  chapters: Chapter[] =[];
  progresses: Progress[] = [];
  userId: string = "";
  isLoadedProgresses: boolean = false;

  ngOnInit(): void {
    this.fetchChapter();
    this.fetchLearnerId();

  }

  fetchLearnerId(): string{
    this.authService.user$.subscribe(
      (user) => {
        console.error("sub reached!")
        if (user?.sub) {
          this.userId = user.sub;
          console.error("learner id set to " + user.sub)
          this.fetchProgress();
        } else {
          console.error("learner id not found")
        }
      }
    );
    return "nulll"
  }

  findProgress(chapterId: number) : number {
    console.error(this.progresses);
    for (let i = 0; i < this.progresses.length; i++) {
      if (chapterId == this.progresses[i].chapter.id) {
        return this.progresses[i].score
      }
    }
    return -1;
  }

  hasProgress(chapterId: number) :  boolean{
    // console.error(chapterId);
    // console.error(this.progresses);
    for (let i = 0; i < this.progresses.length; i++) {
      if (chapterId == this.progresses[i].chapter.id) {
        console.error(`Progress found for ${chapterId}`);
        return true;
      }
    }
    //console.error(`No progress found for ${chapterId}`);
    return false;
  }

  fetchProgress(){
    this.progressService.getAllProgress(this.userId).subscribe(progress => {
      this.progresses = progress
      this.isLoadedProgresses = true;
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
