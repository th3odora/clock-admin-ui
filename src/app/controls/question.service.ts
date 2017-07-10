import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import {  CheckBoxQuestion } from "./question-checkbox";
import { Operation, Parameter } from "../shared/operation/operation";

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
      ,
      new CheckBoxQuestion({
        key: 'enableSuspensions',
        type: 'checkbox',
        label: 'enable suspensions',
        required: true,
        order: 4
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getMyQuestions(operation: Operation) {

    let questions: QuestionBase<any>[];
    let param: any | Parameter;
    for (param in operation.parameters) {
      switch(param) {
          case 'BUSINESS_KEY':{
             questions.push( new TextboxQuestion({
                key: param.code,
                label: param.label,
                value: 'business key',
                required: param.required,
                order: 1
            }));
          }
          case 'SUSPENSIONS': {
              questions.push(new CheckBoxQuestion({
                key: param.code,
                type: 'checkbox',
                label: param.label,
                required: param.required,
                order: 3
            }));
          }
          case 'DESCRIPTION': {
             questions.push(new TextboxQuestion({
                key: param.code,
                label: param.label,
                value: 'description',
                required: param.required,
                order: 2
            })); 
          }
          default: { 
            console.log("Invalid choice"); 
            break;              
          } 
      }
    }
    return questions.sort((a, b) => a.order - b.order);
  }

}
