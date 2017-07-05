import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule }   from '@angular/router';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ActionsComponent } from './actions/actions.component';
import { ActionDetailComponent } from './actions/actions-detail/action-detail.component';
import { ActionService }    from './services/action.service';

import { AppRoutingModule } from './modules/app-routing.module';

@NgModule({
   imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ActionsComponent,
    ActionDetailComponent
  ],
  providers: [ ActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
