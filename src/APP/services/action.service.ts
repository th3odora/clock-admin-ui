import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Action } from '../model/action';

@Injectable()
export class ActionService {

private headers = new Headers({'Content-Type': 'application/json'});
private actionsURL = 'api/actions';  // URL to web api

constructor(private http: Http) { }

  getActions(): Promise<Action[]> {
    return this.http.get(this.actionsURL)
               .toPromise()
               .then(response => response.json().data as Action[])
               .catch(this.handleError);
  }


  getAction(id: number): Promise<Action> {
    const url = `${this.actionsURL}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Action)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}