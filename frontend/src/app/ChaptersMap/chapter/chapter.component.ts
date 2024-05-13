import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { GameComponent } from '../game/game.component';
import { LessenComponent } from '../lessen/lessen.component'

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class ChapterComponent implements OnInit {
  chapterId: number = 0 ;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.chapterId = +this.route.snapshot?.paramMap.get('id')!;
  }
  
  navigateToQuiz(): void {
    this.router.navigate(['/quiz', this.chapterId]);
  }


}