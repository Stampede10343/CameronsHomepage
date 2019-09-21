import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatSidenavModule, MatToolbarModule} from '@angular/material';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from './resume/resume.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProjectKeywordPipe} from './project-keyword.pipe';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2Piwik } from 'angulartics2/piwik';

const appRoutes: Routes = [
  {path: 'resume', component: ResumeComponent, data: {state: 'resume'}},
  {path: 'projects', component: ProjectsComponent, data: {state: 'project'}},
  {path: 'contact', component: ContactComponent, data: {state: 'contact'}},
  {path: 'home', component: HomeComponent, data: {state: 'home'}},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ResumeComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectKeywordPipe,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    Angulartics2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
