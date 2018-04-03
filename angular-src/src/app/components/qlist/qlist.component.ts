import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { FetchQuestionService } from '../../services/fetch-question-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qlist',
  templateUrl: './qlist.component.html',
  styleUrls: ['./qlist.component.css']
})


export class QlistComponent implements OnInit {
  mquizData: any[] = [];
  quizItem: any = null;
  qcount = 0;
  qtime = 0;
  lastInterval: any;
  score = 0;

  constructor(private route: ActivatedRoute, private router: Router, private questionService: FetchQuestionService,
    private sharedData: SharedService) {

    console.log('route data: ' + route.snapshot.data['sub']);

  }



  ngOnInit() {
    this.show(this.route.snapshot.data['sub']);
  }

 // fetches the question for specific category
  show(id) {
    console.log(id);
    const self = this;
    this.questionService.fetchQuestionData(id).subscribe(function (qdata) {
      self.mquizData = [];
      console.log(qdata);
      self.mquizData = qdata;
      self.LoadQ();
      self.sharedData.publishData(id);
    });
  }

  // shows the previous question on the screen
  prevQ() {
    if (this.qcount > 0) {
      this.qcount -= 1;
      this.LoadQ();
    }
    // this.qcount =  (this.qcount > 0) ?  : 0;

  }

  // shows the next question on the screen
  nextQ() {
    if (this.qcount < this.mquizData.length - 1) {
      this.qcount += 1;
      this.LoadQ();
    }
    // this.qcount = () ? this.qcount + 1 : this.mquizData.length - 1;
  }

  // shows the current questions on the screen
  LoadQ() {
    this.stopTimer();
    this.quizItem = this.mquizData[this.qcount];
    this.startTimer();
  }
  // checks whether the selected answer is correct or not
  checkQ(opt) {
    console.log(opt.id);

    opt.className = 'selected-answer';
    const correctIndex = this.quizItem.options.indexOf(this.quizItem.answer);
    document.getElementById(correctIndex).className = 'correct';
    const selID = parseInt(opt.id, 10);
    if (selID === correctIndex) {
      this.score += 10;
    } else {
      document.getElementById(opt.id).className = 'incorrect';
    }
    this.nextQ();
  }
  // timer to complete the answer
  startTimer() {
    this.qtime = 8;
    const self = this;
    self.lastInterval = setInterval(function () {
      self.qtime -= 1;
      if (self.qtime === 0) {
        clearInterval(self.lastInterval);
      }
    }, 1000);
  }

  stopTimer() {
    if (this.lastInterval) {
      clearInterval(this.lastInterval);
    }
  }

}
