import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChaptersService {

  constructor(private http: HttpClient) {}

    getChapterTitleById(id: number): Observable<string> {
        return this.http.get<string>(`http://localhost:8080/chapter/${id}`);
      }
    
    getAllChapters(): Observable<Chapter[]>{
      return this.http.get<Chapter[]>('http://localhost:8080/chapter');
    }


    public get id(): number {
      return this.id;
    }

    public set id(value: number) {
      this.id = value;
    }


}


export interface Chapter {
  id: number;
  title: string;
}

