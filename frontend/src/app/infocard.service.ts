import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfocardService {
  private apiUrl = 'http://localhost:8080/infocard';

  constructor(private http: HttpClient) { }

  getInfoCards(): Observable<InfoCard[]> {
    return this.http.get<InfoCard[]>(this.apiUrl);
  }
  
  getInfoCardsByChapterId(chapterId: number): Observable<InfoCard[]> {
    const url = `${this.apiUrl}/${chapterId}`;
    return this.http.get<InfoCard[]>(url);
  }
}

export interface InfoCard {
  id: number;
  orderNumber: number;
  subtitle: string;
  alineaText: string;
  chapter: {
    id: number;
    title: string;
  };
}

