import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor() { }


  linkedInClicked() {
    window.open("https://www.linkedin.com/in/cameron-cordes-3b166583/")
  }

  githubClicked() {
    window.open("https://github.com/Stampede10343")
  }

  emailClicked() {
    window.open("mailto:cameronc.dev@gmail.com")
  }
}
