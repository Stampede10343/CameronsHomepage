import {Component, OnInit} from '@angular/core';
import {ProjectService} from "./project.service";
import {ProjectItem} from "./project-item";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Array<ProjectItem>;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects() {
    return this.projectService.getProjects().then(projects => this.projects = projects)
  }

}
