import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-controls',
  template: `
    <div>
      <h2>Dynanic form</h2>
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class ControlsComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
