import {AfterContentInit, Component, OnInit} from '@angular/core';
import {AnalyticsService} from '../analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterContentInit {

  constructor(private analytics: AnalyticsService) { }

  ngAfterContentInit(): void {
    this.analytics.trackPageHit('Home');
  }

}
