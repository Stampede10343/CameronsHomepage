import {AfterContentInit, Component, OnInit} from '@angular/core';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterContentInit {

  constructor(private analytics: Angulartics2) {
  }

  ngAfterContentInit(): void {
  }

  linkedInClicked() {
    this.analytics.eventTrack.next(this.linkClickEvent('LinkedIn'));
    window.open('https://www.linkedin.com/in/cameron-cordes-3b166583/');
  }

  githubClicked() {
    this.analytics.eventTrack.next(this.linkClickEvent('GitHub'));
    window.open('https://github.com/Stampede10343');
  }

  emailClicked() {
    this.analytics.eventTrack.next(this.linkClickEvent('Email'));
    window.open('mailto:cameronc.dev@gmail.com');
  }

  private linkClickEvent(label: String): object {
      return {
          action: 'LinkClick',
          properties: {
              category: 'Contact',
              label: label
          }
      };
  }
}
