import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionComponent } from './common/component/section/section.component';
import { InfoButtonComponent } from './common/component/info-button/info-button.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoButtonComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InfoButtonComponent]
})
export class AppModule { }
