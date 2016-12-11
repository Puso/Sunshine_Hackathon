/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StepDataService } from './step-data.service';

describe('StepDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepDataService]
    });
  });

  it('should ...', inject([StepDataService], (service: StepDataService) => {
    expect(service).toBeTruthy();
  }));
});
