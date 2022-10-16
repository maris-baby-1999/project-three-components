import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { DemopipeComponent } from './demopipe/demopipe.component';
import { CustpipePipe } from './custpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    Comp2Component,
    Comp3Component,
    DemopipeComponent,
    CustpipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
