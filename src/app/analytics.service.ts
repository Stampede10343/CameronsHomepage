import {Injectable} from '@angular/core';

declare var OWATracker;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() {
  }

  public trackPageHit(pageName: String) {
    OWATracker.setPageTitle(pageName);
  }
}
