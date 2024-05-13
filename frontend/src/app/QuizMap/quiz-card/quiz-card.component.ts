import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from '../../navbar/navbar.component';
import { ChaptersService } from '../../Services/chapters.service';
import {Chapter} from  '../../Services/chapters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../../Services/quiz.service'
import { QuizService } from '../../Services/quiz.service'
import { Question } from '../../Services/question.service'
import { QuestionService } from '../../Services/question.service'

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.scss'
})
export class QuizCardComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router,private chapterService: ChaptersService, private quistionService: QuestionService, private quizService: QuizService) { }

  chapterId: number = 0 ;
  quizez: Quiz[] = [];
  questions: Question[] = [];

  ngOnInit(): void {
    this.chapterId = +this.route.snapshot?.paramMap.get('id')!;
    this.fetchAllQuistions();
    this.fetchAllQuizez();
  }


  fetchAllQuizez(): void{
    this.quizService.getAllQuizez().subscribe(quizez =>{
      this.quizez = quizez;
    })
  }

  fetchAllQuistions(): void{
    this.quistionService.getAllQuestions().subscribe(questions =>{
      this.questions = questions;
    })
  }

}
