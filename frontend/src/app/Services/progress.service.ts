import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProgressService {

  constructor(private http: HttpClient) { }

  getAllProgress(learnerId: string): Observable<Progress[]>{
    console.error("getAllProgress" + learnerId);
    return this.http.get<Progress[]>(`http://localhost:8080/progress/learner/${learnerId}`);

  }

  postScore(progressPercentage: number, chapterId: number, learnerId: string): Observable<Progress> {

    const progress: Progress = {
      id: 0,
      score: progressPercentage,
      statusProgress: 0,
      chapter: {
        id: chapterId,
        title: ''
      },
      learner: {
        id: 0,
        authId: ''
      }
    };

    return this.http.post<Progress>(`http://localhost:8080/progress/add/${learnerId}/${chapterId}`, progress);
  }
}

  export interface Progress {
    id: number;
    learner: {
      id: number;
      authId: string;
    };
    chapter: {
      id: number;
      title: string;
    };
    statusProgress: number;
    score: number;
  }
  