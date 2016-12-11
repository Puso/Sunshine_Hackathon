import { Injectable } from '@angular/core';

import { StepData } from './step-data';
import { STEPS } from './mock-steps';

@Injectable()
export class StepDataService {

  constructor() { }
  getSteps(): StepData[] {
      return STEPS;
  } //stub

}
