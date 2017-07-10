import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Operation } from "./operation";

/**
 * This class provides Action service with methods to read actions
 */
@Injectable()
export class OperationService {

private headers = new Headers({'Content-Type': 'application/json'});
private actionsURL = 'api/actions';  // URL to web api

  /**
   * Creates a new ActionService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  get(): Observable<Operation[]> {
    return this.http.get('assets/response.json')
                    .map((res: Response) => res.json())
                     .do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }

  getActions(): Promise<Operation[]> {
    return this.http.get(this.actionsURL)
               .toPromise()
               .then(response => response.json().data as Operation[])
               .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

