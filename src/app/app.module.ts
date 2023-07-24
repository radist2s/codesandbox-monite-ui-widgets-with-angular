import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoniteCounterpartsWidgetModule } from './monite-counterparts-widget/monite-counterparts-widget.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MoniteCounterpartsWidgetModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
