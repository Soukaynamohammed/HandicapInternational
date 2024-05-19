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

  givenAnswersCheckboxes: boolean[][] = [];
  givenAnswers: number[] = [];
  quizez: Quiz[] = [];
  questions: Question[] = [];
  @Input() chapterId: number = 0 ;
  currentQuestionIndex: number = 0;

  ngOnInit(): void {
    this.chapterId = +this.route.snapshot?.paramMap.get('id')!;
    this.fetchAllQuistions();
  }

  toggleAnswer(answerNumber: number, questionIndex: number): void {
    this.givenAnswersCheckboxes[questionIndex][answerNumber - 1] = !this.givenAnswersCheckboxes[questionIndex][answerNumber - 1];
    if (this.givenAnswersCheckboxes[questionIndex][answerNumber - 1]) {
      this.givenAnswers.push(questionIndex,answerNumber);
    } else {
      const index = this.givenAnswers.indexOf(answerNumber);
      if (index > -1) {
        this.givenAnswers.splice(index, 1);
      }
    }
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

      this.givenAnswersCheckboxes = Array.from({ length: this.questions.length }, () =>
      Array(4).fill(false)
    );
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
