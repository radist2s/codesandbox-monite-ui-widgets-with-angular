import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { AfterViewInit, Component } from '@angular/core';
import { CounterpartsTableComponent } from './CounterpartsTableComponent';

@Component({
  selector: 'monite-counterparts-widget',
  template: ` <div [id]="divId" style="background-color: white;"></div> `,
})
export class MoniteCounterpartsWidgetComponent implements AfterViewInit {
  divId = 'counterpartsDivId';

  ngAfterViewInit() {
    const rootNode = document.getElementById(this.divId);
    if (!rootNode) throw new Error('Root node not found');
    const root = createRoot(rootNode);
    root.render(createElement(CounterpartsTableComponent, {}, null));
  }
}
