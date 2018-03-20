import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
   // Observable string sources
  private quizData = new Subject<any>();

  quizData$ = this.quizData.asObservable();

  constructor() { }

  publishData(data: any) {
    this.quizData.next(data);
  }


}
