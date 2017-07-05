import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

import { Action } from '../model/action';
import { ActionService} from '../services/action.service';

@Component({
  selector: 'clock-actions',
  templateUrl: './actions.component.html',
  styleUrls: [ './actions.component.css' ]
})

export class ActionsComponent implements OnInit {
    actions: Action[];
    selectedAction: Action;

   constructor(
    private actionService: ActionService, private router: Router) { }

  getActions(): void {
    this.actionService
        .getActions()
        .then(actions => this.actions = actions);
  }

  ngOnInit(): void {
    this.getActions();
  }

    onSelect(action: Action): void {
        this.selectedAction = action;
        console.log(this.selectedAction);
        this.router.navigate(['/detail', this.selectedAction.id]);
  }


}
