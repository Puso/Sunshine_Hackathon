import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { StepData } from './step-data';
import { STEPS } from './mock-steps';
import { Observable } from '../../node_modules/rxjs/Observable';

@Injectable()
export class StepDataService {
  private stepsUrl = 'api/featurefiles/searchsteps/';

  constructor(private http: Http) { }
  getSteps(): Observable<StepData[]> {
      return this.http.get(this.stepsUrl)
                          .map(this.extractData)
                          .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
