import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getAllQuizez(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>('http://localhost:8080/quiz');
  }

}

export interface Quiz {
  id: number;
  chapter_id: number;
}

