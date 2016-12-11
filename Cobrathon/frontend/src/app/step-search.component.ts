import { Component, Input } from '@angular/core';
import { StepData } from './stepData';

@Component({ 
    selector: 'step-search',
    template: `
        <div><label>Search steps: </label></div>
        <input [(ngModel)]="stepData.fileContent" placeholder="Step">
         `
})

export class StepSearchComponent {
    @Input()
    stepData: StepData;
}