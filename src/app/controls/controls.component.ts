import { Component, Input }       from '@angular/core';

import { QuestionService } from './question.service';
import { Operation } from "../shared/operation/operation";

@Component({
  selector: 'app-controls',
  templateUrl: 'controls.component.html',
  providers:  [QuestionService]
})
export class ControlsComponent {

 // @Input() operation: Operation;

  questions: any[];

  constructor(public service: QuestionService) {
    this.questions = service.getQuestions();
   // this.renderOperation();
  }

  renderOperation() {

   // this.questions = this.service.getMyQuestions(this.operation);
  }

  
}
