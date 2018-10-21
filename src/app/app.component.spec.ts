import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {RouterTestingModule} from "@angular/router/testing";
import {MatSidenavModule, MatToolbarModule} from "@angular/material";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('AppComponent', () => {
  beforeEach(async(() => {
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
