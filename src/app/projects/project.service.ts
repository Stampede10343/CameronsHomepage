import {Injectable} from '@angular/core';
import {ProjectItem} from "./project-item";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() {
  }

  getProjects(): Promise<Array<ProjectItem>> {
    return Promise.resolve(projects)
  }
}

const projects = [
  {
    title: "Movies",
    applicationType: "Android Application (Kotlin)",
    description: "<a href='https://github.com/Stampede10343/Movies_TMDb'>Movies</a> is an Android application for viewing movie and TV show info using the TMDB API. Movies is a Single Activity application, leveraging Model-View-View Model, Dagger 2, RxJava and SimpleStack for navigation. There is a focus on caching and a pleasant user experience even on slower networks by combining both in-memory and disk caching for quick load times, especially after a show details have been viewed."
  },
  {
    title: "Secure Notes",
    applicationType: "Android Application (Kotlin)",
    description: "<a href='https://github.com/Stampede10343/SecureNotes'>Secure Notes</a> is a simple note taking application with security in mind. There is a focus on clean" +
    " code, Model-View-View Model and loosely coupled components. I built this app to experiment with different" +
    " Android database libraries (Realm and Room), encryption and security, as well as a single Activity approach to" +
    " an Android app. (Under development).",
    imgLocation: "../../assets/note-icon.png"
  },
  {
    title: "CorpsTime",
    applicationType: "Android Application (Java and Kotlin)",
    description: "CorpsTime is an Android application to view news, scores and the schedule of Drum Corps International" +
    " competitions. CorpsTime uses the Model View Presenter pattern and libraries such as Dagger 2, Retrofit and RxJava.",
    imgLocation: "../../assets/corpstime.png"
  },
  {
    title: "CorpsTime Scraper and API",
    applicationType: "Express API powered by Node (Javascript)",
    description: "The CorpsTime scraper and API is the supporting code for the CorpsTime mobile application, written" +
    " in Javascript using Express, Node, and MySQL to gather and prepare data for the CorpsTime client. The scraper" +
    " runs nightly during the Drum Corps season to pull data from different websites and store and format it to be" +
    " later retrieved by the API. The API includes a handful of endpoints to get scores, different competing corps and" +
    " the upcoming events during the season.",
    imgLocation: ""
  },
  {
    title: "Android Hues",
    applicationType: "Android Application (Kotlin)",
    description: "<a href='https://github.com/Stampede10343/AndroidHues'>Android Hues</a> is an Android application to control your Phillips Hue lights at home. Hues uses RxJava," +
    " Dagger 2 and the Phillips Hue SDK in order to control the color, brightness and power state of your lights.",
    imgLocation: "../../assets/android-hues.png"
  }
];
