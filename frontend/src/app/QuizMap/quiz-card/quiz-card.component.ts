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
import { MatDialog } from '@angular/material/dialog';
import { ErrorBerichtQuizComponent } from '../error-bericht-quiz/error-bericht-quiz.component'; 
import { ProgressService } from '../../Services/progress.service';
import { Progress } from '../../Services/progress.service';
import { AuthService } from '@auth0/auth0-angular'
 
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
    public dialog: MatDialog,
    private progressService: ProgressService,
    private authService: AuthService
  ) { }

  givenAnswersCheckboxes: boolean[][] = [];
  givenAnswers: number[] = [];
  quizez: Quiz[] = [];
  questions: Question[] = [];
  @Input() chapterId: number = 0 ;
  currentQuestionIndex: number = 0;
  allQuestionsFilled: boolean = false;
  resultsButtonClicked: boolean = false;

  ngOnInit(): void {
    this.chapterId = +this.route.snapshot?.paramMap.get('id')!;
    this.fetchAllQuistions();
  }

  calculateProgress() : number {

    const totalQuestions = this.questions.length;
    var totalCorrect = 0;

    for (let i = 0; i < totalQuestions; i++) {
      const correctAnswer = this.questions[i].correctAnswer;
      const currenAnswer = this.givenAnswers[i];
      if (correctAnswer == currenAnswer) {
        totalCorrect++;
      }
    }
    
    const scorePercentage = (totalCorrect / totalQuestions) * 100;

    return scorePercentage;
  }

  saveProgress(){
    this.authService.user$.subscribe(
      (user) => {
        const scorePercentage = this.calculateProgress();
        if (user?.sub) {
          this.progressService.postScore(scorePercentage, this.chapterId, user.sub);
        }else {
          console.log('not logged in!')
        }
        
      }
    )
    

  }

  toggleAnswer(answerNumber: number, questionIndex: number): void {
    const isChecked = this.givenAnswersCheckboxes[questionIndex][answerNumber - 1];
    
    // Clear all checkboxes for the current question
    this.givenAnswersCheckboxes[questionIndex].fill(false);
    
    // If the checkbox was checked, remove the answer
    if (isChecked) {
      // Remove the answer from the givenAnswers array
      const indexToRemove = this.givenAnswers.indexOf(answerNumber);
      if (indexToRemove > -1) {
        this.givenAnswers.splice(indexToRemove, 1);
      }
    } else {
      // Set the selected checkbox
      this.givenAnswersCheckboxes[questionIndex][answerNumber - 1] = true;
      // Update the givenAnswers array
      this.givenAnswers[questionIndex] = answerNumber;
    }
  }
  
  

  // toggleAnswer(answerNumber: number, questionIndex: number): void {
  //   this.givenAnswersCheckboxes[questionIndex][answerNumber - 1] = !this.givenAnswersCheckboxes[questionIndex][answerNumber - 1];
  //   if (this.givenAnswersCheckboxes[questionIndex][answerNumber - 1]) {
  //     this.givenAnswers.push(questionIndex,answerNumber);
  //   } else {
  //     const index = this.givenAnswers.indexOf(answerNumber);
  //     if (index > -1) {
  //       this.givenAnswers.splice(index, 1);
  //     }
  //   }
  // }
  
  addAnswer(answerNumber: number){
    this.givenAnswers.push(answerNumber);
  }

  saveAnswersInService(): void {
    this.saveProgress()
    this.questionAnswersService.setAnswers(this.givenAnswers);
    this.resultsButtonClicked = true;
    this.updateErrorBericht();

    if (this.allQuestionsFilled) {
      this.navigateToResults();
    } 
    else {
      this.openErrorDialog()
    }
  }

  updateErrorBericht(): void {
    this.allQuestionsFilled = this.givenAnswersCheckboxes.every(
      options => options.some(option => option)
    );
  }

  openErrorDialog(): void {
    const dialogRef = this.dialog.open(ErrorBerichtQuizComponent, {
      width: '400px',
      data: "Answer all the questions before you can continue."
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
    if (this.allQuestionsFilled) {
      this.router.navigate([`/results/${this.chapterId}`]);
    }

  }
}