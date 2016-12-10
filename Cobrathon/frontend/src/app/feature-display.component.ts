import { Component, Input } from '@angular/core';
// import { FeatureData } from './FeatureData';

export class Feature {
    id: number;
    details: string;
}

const FEATURES: Feature[] =[
    { id: 1, details: 'Scenario: One Scenario Given When Then'},
    { id: 2, details: 'Scenario: Two Scenario Given When Then'}    
];

@Component({ 
    selector: 'feature-app',
    template: `
    <h3>My Feature File</h3>
    <div style="height:300px; 
        width:620px;
        overflow:auto;
        border:2px solid lightgrey;
        padding:2%">
    <ul class="features">
        <li *ngFor="let feature of features">
            <span class="badge">{{feature.id}}</span> {{feature.details}}
        </li>
    </ul>
    </div>
    `,
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .features {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 38em;
  }
  .features li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: 3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .features li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .features li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: 1em;
  }
  .features .text {
    position: relative;
    top: -3px;
  }
  .features .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -10px;
    top: -53px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 8px 8px 3px 20px;
  }
`
]

})

export class FeatureDisplayComponent {
    features = FEATURES;
    feature: Feature = {
        id: 12,
        details: 'Feature deuce Scenario Quatro Given When And Then But'
    };
}