import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChaptersService {

  constructor(private http: HttpClient) {
    // this.getAllChapters().subscribe(chapters => {
    //   this.chapters = chapters;
    // });
   }

    getChapterTitleById(id: number): Observable<string> {
        return this.http.get<string>(`http://localhost:8080/chapter/${id}`);
      }
    
    getAllChapters(): Observable<Chapter[]>{
      return this.http.get<Chapter[]>('http://localhost:8080/chapter');
    }
}


export interface Chapter {
  id: number;
  title: string;
}


// export class Chapter {
//   id: number;
//   title: string;
  
//   constructor(id: number, title: string) {
//     this.id = id;
//     this.title = title;
//   }
// }