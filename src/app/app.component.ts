import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animate, query, style, transition, trigger} from '@angular/animations';
import { Angulartics2Piwik } from 'angulartics2/piwik';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter',
      style({
        position: 'fixed',
        width: '100%',
        height: '100%',
        opacity: 0
      }),
      {optional: true}),

    query(':leave',
      animate('300ms ease-in-out',
        style({
          position: 'fixed',
          width: '100%',
          height: '100%',
          opacity: 0
        })
      ),
      {optional: true}),

    query(':enter',
      animate('300ms ease-in-out',
        style({
          opacity: 1,
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
  constructor(private matomo: Angulartics2Piwik) {
    matomo.startTracking();
  }

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }
}

