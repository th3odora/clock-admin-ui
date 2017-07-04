import { Component, OnInit } from '@angular/core';
import { Action } from '../model/action';
import { ActionService} from '../services/action.service';

@Component({
  selector: 'clock-actions',
  template: `
     <li *ngFor="let action of actions">
         <span>{{action.code}}</span>
    </li>
  `,
  styleUrls: [ './actions.component.css' ]
})

export class ActionsComponent implements OnInit {
   actions: Action[];

   constructor(
    private actionService: ActionService) { }

  getActions(): void {
    this.actionService
        .getActions()
        .then(actions => this.actions = actions);
  }

  ngOnInit(): void {
    this.getActions();
  }
}
