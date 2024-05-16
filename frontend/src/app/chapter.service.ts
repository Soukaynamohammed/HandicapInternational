import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChaptersService {

  constructor(private http: HttpClient) {
   }
    getAllChapters(): Observable<Chapter[]>{
      return this.http.get<Chapter[]>('http://localhost:8080/chapter');
    }
}


export interface Chapter {
  id: number;
  title: string;
}