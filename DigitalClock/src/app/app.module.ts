import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DigitalClockComponentComponent } from './digital-clock-component/digital-clock-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
