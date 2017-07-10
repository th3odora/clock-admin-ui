import { QuestionBase } from './question-base';

export class CheckBoxQuestion extends QuestionBase<String> {
  controlType = 'checkbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
