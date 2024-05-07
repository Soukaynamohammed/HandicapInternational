import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  private baseUrl = 'http://localhost:8080/api/chapter';

  constructor(private http: HttpClient) { }

  getAllChapters(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(this.baseUrl);
  }
}


export class Chapter {
  id: number;
  title: string;
  
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}

