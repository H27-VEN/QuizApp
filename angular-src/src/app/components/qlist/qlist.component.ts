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
  renderList: any;
  selectedItem: any;
  selectedOption: any;
  selectListID: any;
  qcount = 0;
  qtime = 0;
  lastInterval: any;
  score = 0;

  constructor(private route: ActivatedRoute, private router: Router, private questionService: FetchQuestionService,
    private sharedData: SharedService) {

    console.log('route data: ' + route.snapshot.data['sub']);
    /* const self = this;
    this.sharedData.quizData$.subscribe(function(qdata) {
      if (typeof qdata === 'object' && Array.isArray(qdata)) {
          self.mquizData = qdata;
        }
    }); */
  }



  ngOnInit() {
    this.show(this.route.snapshot.data['sub']);
  }

  selectedListItem(item, option, listID) {
    console.log(item);
    console.log(option);
    console.log(listID);
    this.selectedItem = item;
    this.selectedOption = option;
    this.selectListID = listID;
  }

  checkAnswer(optionList) {
    console.log('--- In option list ---');
    if (optionList.id === this.selectListID) {
      console.log('in major if');
      const id = optionList.id.split('-')[0];
      const correctOption = this.mquizData[id].answer;
      if (correctOption === this.selectedOption) {
        if (!this.selectedItem.classList.contains('correct')) {
          this.selectedItem.classList.remove('incorrect');
          this.selectedItem.classList.add('correct');
        }
      } else {
        const correctListItemID = id + '-' + this.mquizData[id].options.indexOf(correctOption);
        const listElements = optionList.getElementsByTagName('li');
        let correctListItem = null;
        for (let i = 0; i < listElements.length; i++) {
          if (listElements[i].id === correctListItemID) {
            correctListItem = listElements[i];
            break;
          }
        }
        if (!correctListItem.classList.contains('correct')) {
          correctListItem.classList.add('correct');
        }
      }
      optionList.getElementsByTagName('span')[0].innerText = '';
    } else {
      console.log('In major else');
      optionList.getElementsByTagName('span')[0].innerHTML = 'No options selected';
    }
  }

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

  prevQ() {
    this.qcount =  (this.qcount > 0) ? this.qcount - 1 : 0;
    this.LoadQ();
  }

  nextQ() {
    this.qcount = (this.qcount < this.mquizData.length - 1) ? this.qcount + 1 : this.mquizData.length - 1;
    this.LoadQ();
  }

  LoadQ() {
    this.stopTimer();
    this.quizItem = this.mquizData[this.qcount];
    this.startTimer();
  }

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

     const options = document.querySelectorAll('.options p');
     for (let i = 0; i < options.length; i++) {
        if (i !== selID || i !== correctIndex) {
            options[i].setAttribute('disabled', 'true');
        }
     }

    // options.setAttribute('disabled', 'true');

    /* btn.disabled = true; */
    /* let correctImg;
    let incorrectImg;
    if (this.quizItem.options[id] === this.quizItem.answer) {
      correctImg = document.getElementById('img_' + id);
      correctImg.setAttribute('src', '../../assets/icons/correct.png');
      correctImg.classList.remove('hide');
      this.score += 10;
    } else {
      const correctID = this.quizItem.options.indexOf(this.quizItem.answer);
      correctImg = document.getElementById('img_' + correctID);
      correctImg.setAttribute('src', '../../assets/icons/correct.png');
      correctImg.classList.remove('hide');

      incorrectImg = document.getElementById('img_' + id);
      incorrectImg.setAttribute('src', '../../assets/icons/incorrect.png');
      incorrectImg.classList.remove('hide');
    } */
  }

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
