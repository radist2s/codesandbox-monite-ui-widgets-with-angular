import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoniteCounterpartsWidgetComponent } from './monite-counterparts-widget.component';

@NgModule({
  declarations: [MoniteCounterpartsWidgetComponent],
  imports: [CommonModule],
  exports: [MoniteCounterpartsWidgetComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MoniteCounterpartsWidgetModule { }
