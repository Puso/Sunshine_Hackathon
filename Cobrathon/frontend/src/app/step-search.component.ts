import { Component, Input } from '@angular/core';
import { FeatureDisplayComponent } from './feature-display.component';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';

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
    <ng2-completer [dataService]="dataService" [minSearchLength]="3" [placeholder]="'search steps'" [clearSelected]="true" (selected)="onStepSelected($event)" >
    </ng2-completer>
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

  private searchStr: string;
  private dataService: CompleterData;
  private searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];
    constructor(private completerService: CompleterService) {
        this.dataService = completerService.remote("http://localhost:4200/assets/testdata.json?", 'stepText', 'stepText');
        //this.dataService = completerService.local(this.searchData, 'color', 'color');
    }

    addLine(newLine: string) {
        if (newLine) {
        this.lines.push(newLine);
        }
    }

    public onStepSelected(selected: CompleterItem)
    {
        console.log(selected);
        if(selected)
            this.lines.push(selected.title);
    }

    public newScenario = [];
    addScenario(newScenario: string) {
        if(newScenario) {
            this.lines.push(newScenario);
        }
    }
}