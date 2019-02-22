import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {ProjectItem} from './project-item';
import {AnalyticsService} from '../analytics.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, AfterContentInit {
  projects: Array<ProjectItem>;

  constructor(private projectService: ProjectService, private analytics: AnalyticsService) {
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects().then(projects => this.projects = projects);
  }

  ngAfterContentInit(): void {
    this.analytics.trackPageHit('Projects');
  }

}
