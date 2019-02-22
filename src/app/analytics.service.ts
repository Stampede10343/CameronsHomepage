import {Injectable} from '@angular/core';

declare var owa_cmds: Array<any>;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() {
  }

  public trackPageHit(pageName: String) {
    if (typeof owa_cmds === 'object') {
      owa_cmds.push(pageName);
    }
  }
}
