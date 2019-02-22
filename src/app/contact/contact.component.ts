import {AfterContentInit, Component, OnInit} from '@angular/core';
import {AnalyticsService} from '../analytics.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterContentInit {

  constructor(private analytics: AnalyticsService) {
  }

  ngAfterContentInit(): void {
    this.analytics.trackPageHit('Contact');
  }

  linkedInClicked() {
    window.open('https://www.linkedin.com/in/cameron-cordes-3b166583/');
  }

  githubClicked() {
    window.open('https://github.com/Stampede10343');
  }

  emailClicked() {
    window.open('mailto:cameronc.dev@gmail.com');
  }
}
