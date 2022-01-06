import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  // Registration of components
  declarations: [
    AppComponent
  ],
  // Using other modules.
  imports: [
    BrowserModule
  ],
  // Provide services
  providers: [],
  // Startup component
  bootstrap: [AppComponent]
})
export class AppModule { }
