import { Component, OnInit } from '@angular/core';

import { OperationService } from "../shared/operation/operation.service";
import { Operation } from '../shared/operation/operation';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  errorMessage: string;

  operations : Operation[];
  selectedOperation: Operation;

  onSelect(operation: Operation): void {
    this.selectedOperation = operation;
  }

  
  constructor(public operationService: OperationService) {}

  /**
   * Get the actions OnInit
   */
  ngOnInit() {
  
    this.getOperations();
  }


  getOperations() {
    this.operationService.get()
      .subscribe(       
        (operations: Operation[]) => this.operations = operations,
        error => this.errorMessage = <any>error
      );
  }

}
