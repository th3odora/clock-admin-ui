import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActionDetailComponent }  from '../actions/actions-detail/action-detail.component';
import { ActionsComponent } from '../actions/actions.component';

const routes: Routes = [
{ path: '', redirectTo: '/actions', pathMatch: 'full' },
{ path: 'detail/:id', component: ActionDetailComponent },
{ path: 'actions',     component: ActionsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}