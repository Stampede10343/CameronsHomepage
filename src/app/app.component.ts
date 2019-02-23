import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatomoInjector} from 'ngx-matomo';
import {animate, query, style, transition, trigger} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    // Initial state of new route
    query(':enter',
      style({
        position: 'fixed',
        width: '100%',
        // transform: 'translateX(-100%)'
        opacity: 0
      }),
      {optional: true}),

    // move page off screen right on leave
    query(':leave',
      animate('300ms ease-in-out',
        style({
          position: 'fixed',
          width: '100%',
          // transform: 'translateX(100%)'
          opacity: 0
        })
      ),
      {optional: true}),

    // move page in screen from left to right
    query(':enter',
      animate('300ms ease-in-out',
        style({
          opacity: 1,
          // transform: 'translateX(0%)'
        })
      ),
      {optional: true}),
  ])
]);

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private matomoInjector: MatomoInjector) {
        this.matomoInjector.init('https://cameroncordes.me/piwik', 1);
    }

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }
}

