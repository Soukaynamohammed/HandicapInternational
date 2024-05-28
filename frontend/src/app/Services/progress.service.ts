import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProgressService {

  constructor(private http: HttpClient) { }

  getAllProgress(): Observable<Progress[]>{
    return this.http.get<Progress[]>(`http://localhost:8080/progress/learner/{}`);
  }

  postScore(progressPercentage: number, chapterId: number, learnerId: string): Observable<Progress> {

    const progress: Progress = {
      id: 0, 
      score: progressPercentage,
      status_progress: 0, 
      chapter_id: chapterId,
      learner_id: learnerId 
    };

    return this.http.post<Progress>(`http://localhost:8080/progress/add/`, progress);
  }
}

export interface Progress {
  id: number;
  score: number;
  status_progress: number;
  chapter_id: number;
  learner_id: string;
}