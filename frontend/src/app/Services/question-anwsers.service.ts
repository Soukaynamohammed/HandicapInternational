import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionAnwsersService {

  constructor() { }

  answersList: number[] = [];

  setAnswers(list: number[]){
    this.answersList = list;
  }

  getAnswers(){
    return this.answersList;
  }
}
