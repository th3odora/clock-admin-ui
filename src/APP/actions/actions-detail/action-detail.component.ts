import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Action }        from '../..//model/action';
import { ActionService } from '../../services/action.service';

@Component({
  selector: 'action-detail',
  templateUrl: './action-detail.component.html',
  styleUrls: [ './action-detail.component.css' ]
})
export class ActionDetailComponent implements OnInit {
  action: Action;

  constructor(
    private actionService: ActionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.actionService.getAction(+params.get('id')))
      .subscribe(action => this.action = action);
  }

  goBack(): void {
    this.location.back();
  }
}