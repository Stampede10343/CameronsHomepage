import {AfterContentInit, Component, OnInit} from '@angular/core';
import {AnalyticsService} from '../analytics.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterContentInit {
  private analytics: AnalyticsService;

  constructor(analytics: AnalyticsService) {
    this.analytics = analytics;
  }

  ngAfterContentInit(): void {
    this.analytics.trackPageHit('Resume');
  }

}
