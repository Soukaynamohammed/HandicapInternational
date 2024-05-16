import { Component, Input, OnInit } from '@angular/core';
import {NavbarComponent} from '../../navbar/navbar.component';
import { ChaptersService } from '../../Services/chapters.service';
import {Chapter} from  '../../Services/chapters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../../Services/quiz.service'
import { QuizService } from '../../Services/quiz.service'
import { Question } from '../../Services/question.service'
import { QuestionService } from '../../Services/question.service'
import { ResultsComponent } from '../results/results.component'
import { QuestionAnwsersService } from '../../Services/question-anwsers.service'

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.scss'
})
export class ResultCardComponent implements OnInit{

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private quistionService: QuestionService, 
    private quizService: QuizService,
    private questionAnswersService: QuestionAnwsersService,
  ) { }

  givenAnswers: number[] = this.questionAnswersService.getAnswers();
  questions: Question[] = [];
  @Input() chapterId: number = 0;
  currentQuestionIndex: number = 0;

  
  ngOnInit(): void {
    this.fetchAllQuistions();
  }

  fetchAllQuistions(): void{
    this.quistionService.getAllQuestionsByQuizId(this.chapterId).subscribe(questions =>{
      this.questions = questions;
    })
  }

  goToNextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  goToPreviousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  navigateToDashboard(){
    this.router.navigate(['/dashboard'])
  }
}
