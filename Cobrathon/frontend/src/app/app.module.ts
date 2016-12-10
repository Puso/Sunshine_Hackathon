import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StepSearchComponent } from './step-search.component';
import { FeatureDisplayComponent } from './feature-display.component';

@NgModule({
  declarations: [
    AppComponent,
    StepSearchComponent,
    FeatureDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
