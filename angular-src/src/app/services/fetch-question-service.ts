import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FetchQuestionService {

  baseURL = 'http://localhost:5000/quiz/';

  constructor(public http: Http) {}

  fetchQuestionData(quizCategory) {
    switch (quizCategory) {
      case 'sports':
      case 'movies':
      case 'history':
      case 'geography':
        return this.http.get(this.baseURL + quizCategory).map(res =>  res.json());
    }
  }


}
