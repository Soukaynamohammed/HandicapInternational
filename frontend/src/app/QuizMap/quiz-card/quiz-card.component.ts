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
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.scss'
})
export class QuizCardComponent implements OnInit{
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private chapterService: ChaptersService, 
    private quistionService: QuestionService, 
    private quizService: QuizService,
    private questionAnswersService: QuestionAnwsersService,
  ) { }

  
  givenAnswers: number[] = [];
  quizez: Quiz[] = [];
  questions: Question[] = [];
  @Input() chapterId: number = 0 ;
  currentQuestionIndex: number = 0;

  ngOnInit(): void {
    this.chapterId = +this.route.snapshot?.paramMap.get('id')!;
    this.fetchAllQuistions();
  }

  addAnswer(answerNumber: number){
    this.givenAnswers.push(answerNumber);
  }

  saveAnswersInService(){
    this.questionAnswersService.setAnswers(this.givenAnswers);
  }

  fetchAllQuizez(): void{
    this.quizService.getAllQuizez().subscribe(quizez =>{
      this.quizez = quizez;
    })
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

  navigateToResults(){
    this.router.navigate([`/results/${this.chapterId}`]);
  }

}
