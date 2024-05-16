import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getAllQuestionsByQuizId(quizid: number): Observable<Question[]> {
    console.error("call");

    return this.http.get<Question[]>(`http://localhost:8080/questions/${quizid}`);

  }
}

export interface Question {
  id: number;
  text: string; 
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctAnswer: number; 
  quiz: {
    id: number; 
    chapter: {
      id: number;
      title: string;
    }
  };
}