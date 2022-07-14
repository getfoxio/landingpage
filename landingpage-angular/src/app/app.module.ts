import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { LandingpageModule } from 'landingpage'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LandingpageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
