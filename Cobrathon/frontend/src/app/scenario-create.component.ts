import { Component, Input } from '@angular/core';
import { ScenarioData } from './ScenarioData';

@Component({ 
    selector: 'scenario-create',
    template: `
        <div><label>Create Scenario: </label></div>
        <[(ngModel)]="ScenarioData.fileContent" placeholder="Step">
            `
})

export class ScenarioCreateComponent {

}