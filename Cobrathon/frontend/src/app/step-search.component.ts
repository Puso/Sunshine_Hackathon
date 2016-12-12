import { Component, Input } from '@angular/core';
import { FeatureDisplayComponent } from './feature-display.component';

@Component({
  selector: 'step-search',
  template: `
    <div class="app" style="height:20px; 
        width:320px;
        padding:5%"><label>Search steps: </label>
    <input #newLine
      (keyup.enter)="addLine(newLine.value); newLine.value =''"
      (blur)="addLine(newLine.value); newLine.value='' ">
    <button (click)=addLine(newLine.value)>Add</button></div>

    <div style="height:300px; 
        width:320px;
        overflow:auto;
        border:2px solid lightgrey;
        padding:5%"><label>Create Scenario: </label>
        <button (click)="addScenario([newScenario.values])"> Add to Feature</button>
    <ul><li *ngFor="let line of lines">{{line}}</li></ul></div>
    `,
})

export class StepSearchComponent {
    @Input()
    // stepData: StepData;
    lines = [];
    addLine(newLine: string) {
        if (newLine) {
        this.lines.push(newLine);
        }
    }

    public newScenario = [];
    addScenario(newScenario: string) {
        if(newScenario) {
            this.lines.push(newScenario);
        }
    }
}