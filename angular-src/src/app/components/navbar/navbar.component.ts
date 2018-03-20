import { Component, OnInit } from '@angular/core';
import { FetchQuestionService } from '../../services/fetch-question-service';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  lastClickedItem: any;

  constructor(private questionService: FetchQuestionService, private sharedData: SharedService) {
    const self = this;
    this.sharedData.quizData$.subscribe(function (qdata) {
      console.log('qdata: ');
      console.log(qdata);
      if (typeof qdata  === 'string') {
          self.markActiveCategeory(qdata);
      }
    });
  }

  ngOnInit() {
    this.lastClickedItem = document.getElementById('home');
    console.log('this.lastClickedItem: ' + this.lastClickedItem);
    /* const self = this;
    this.questionService.fetchQuestionData('sports').subscribe(function (qdata) {
      // console.log('qdata: ' + qdata);
      self.shareQuizData.publishData(qdata);
    }); */
  }

  markActiveCategeory(id) {
    const listItem = document.getElementById(id);
    listItem.classList.add('active');
    this.lastClickedItem.classList.remove('active');
    this.lastClickedItem = listItem;
  }

  selectCategory(e) {
    console.log(e.target.id);
    const self = this;
    const listItem = e.target.parentNode;
    listItem.classList.add('active');
    console.log('this.lastClickedItem: ' + this.lastClickedItem);
    if (this.lastClickedItem) {
      this.lastClickedItem.classList.remove('active');
    }

    this.lastClickedItem = listItem;

    if (e.target.id === 'home') {
      const qdata = { questions: [] };
      self.sharedData.publishData(qdata);
    } else {
    this.questionService.fetchQuestionData(e.target.id).subscribe(function(qdata) {
      self.sharedData.publishData(qdata);
    });
  }
}

}
