import { Component } from '@angular/core';
import { StepData } from './step-data';

import { StepDataService } from './step-data.service';
import './rxjs-operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StepDataService]
})
export class AppComponent {
  constructor(private stepDataService:  StepDataService) {} 
   
  getSteps(): void {
    this.steps = this.stepDataService.getSteps();
  }  
  title = 'Knowing Is Half The Battle!';
  steps: StepData[];
}
