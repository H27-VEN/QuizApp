import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { FetchQuestionService } from '../../services/fetch-question-service';

@Component({
  selector: 'app-qlist',
  templateUrl: './qlist.component.html',
  styleUrls: ['./qlist.component.css']
})


export class QlistComponent implements OnInit {
  mquizData: any[] = [];
  renderList: any;
  selectedItem: any;
  selectedOption: any;
  selectListID: any;

  constructor(private questionService: FetchQuestionService, private sharedData: SharedService) {
    const self = this;
    this.sharedData.quizData$.subscribe(function(qdata) {
      if (typeof qdata === 'object' && Array.isArray(qdata)) {
          self.mquizData = qdata;
        }
    });
  }



  ngOnInit() {
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
      self.sharedData.publishData(id);
    });
  }

}
