import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { RouterModule }   from '@angular/router';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './components/app.component';
import { ActionsComponent } from './components/actions.component';
import { ActionService }    from './services/action.service';

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  /*
     RouterModule.forRoot([
      {
        path: '/',
        component: AppComponent
      }
    ])
*/
  ],
  providers: [ ActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
