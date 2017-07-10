import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { DetailComponent } from "./detail/detail.component";
import { SharedModule } from '../shared/shared.module';
import { OperationService } from "../shared/operation/operation.service";
import {  ControlsModule} from "../controls/controls.module";

@NgModule({
  imports: [ SharedModule, ControlsModule],
  declarations: [HomeComponent, DetailComponent],
  exports: [HomeComponent],
  providers: [OperationService]
})
export class HomeModule { }
