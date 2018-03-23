import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FetchQuestionService {

  baseURL = 'http://localhost:5000/quiz/';

  data = {sports: null, movies: null, history: null, geography: null};

  constructor(public http: Http) {}

  fetchQuestionData(quizCategory) {
    switch (quizCategory) {
      case 'sports':
      case 'movies':
      case 'history':
      case 'geography':
        if (this.data[quizCategory] === null) {
            this.data[quizCategory] =  this.http.get(this.baseURL + quizCategory).map(res => res.json());
            return this.data[quizCategory];
        } else {
          return this.data[quizCategory];
        }
     }
  }


}
