import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent }                 from './controls.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { DatePickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [ ReactiveFormsModule, CommonModule, DatePickerModule ],
  declarations: [ ControlsComponent, DynamicFormComponent, DynamicFormQuestionComponent ],
  exports: [ ControlsComponent ]
})
export class ControlsModule {
}
