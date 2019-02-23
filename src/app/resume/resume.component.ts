import {AfterContentInit, Component, OnInit} from '@angular/core';
import {AnalyticsService} from '../analytics.service';
import {MatomoTracker} from 'ngx-matomo';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterContentInit {
  private analytics: AnalyticsService;

  constructor(analytics: AnalyticsService, private matomoTracker: MatomoTracker) {
    this.analytics = analytics;
  }

  ngAfterContentInit(): void {
    this.analytics.trackPageHit('Resume');
    this.matomoTracker.trackPageView('Resume');
  }

}
