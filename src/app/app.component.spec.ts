import {async, TestBed} from '@angular/core/testing';
import { InjectionToken } from '@angular/core';
import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {RouterTestingModule} from '@angular/router/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { RouterlessTracking } from 'angulartics2';
import { Angulartics2Piwik } from 'angulartics2/piwik';

describe('AppComponent', () => {
  let piwik: Angulartics2Piwik;

  beforeEach(async(() => {
    piwik = jasmine.createSpyObj('piwik', ['startTracking']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatSidenavModule,
        NoopAnimationsModule,
      ],
      declarations: [
        AppComponent,
        ToolbarComponent
      ],
      providers: [
        { provide: Angulartics2Piwik, useValue: piwik },
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should call start tracking once loaded', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(piwik.startTracking).toHaveBeenCalled();
  });

});
