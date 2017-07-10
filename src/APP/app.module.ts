import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { HomeModule } from "./home/home.module";
import { ControlsModule } from "./controls/controls.module";

//import { DetailModule } from "./detail/detail.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    SharedModule, HomeModule,
    ControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
