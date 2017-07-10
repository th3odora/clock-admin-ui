import { Component, Input} from '@angular/core';
import { Operation } from "../../shared/operation/operation";

@Component({
  selector: 'operation-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css'],
  providers:  []
})
export class DetailComponent {

  @Input() operation: Operation;

}
