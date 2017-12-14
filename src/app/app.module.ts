import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppngifComponent } from './appngif/appngif.component';
import { NgForDirectivesComponent } from './ng-for-directives/ng-for-directives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';


@NgModule({
  declarations: [
    AppComponent,
    AppngifComponent,
    NgForDirectivesComponent,
    NgswitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
