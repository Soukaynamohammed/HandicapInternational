import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('http://localhost:8080/questions');
  }
}

export interface Question {
  id: number;
  correct_answer: number;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  questionTekst: string;
  quiz_id: number;
}