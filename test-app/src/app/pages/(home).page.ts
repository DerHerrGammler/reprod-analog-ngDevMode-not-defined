import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'test-app-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <test-app-analog-welcome/>
  `,
})
export default class HomeComponent {
}
