import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToolbarComponent} from './toolbar.component';
import {MatSidenavModule, MatToolbarModule} from "@angular/material";
import {RouterTestingModule} from "@angular/router/testing";
import {Component} from "@angular/core";

@Component({template: ''})
class DummyComponent {
}

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule,
        MatSidenavModule,
        RouterTestingModule.withRoutes([{path: 'home', component: DummyComponent}])
      ],
      declarations: [ToolbarComponent, DummyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a material toolbar', () => {
    expect(fixture.debugElement.children[0].nativeElement.className).toBe("mat-drawer-container mat-sidenav-container")
  });

  it('should contain 4 links, Home, Resume, Projects, Contact', () => {
    let debugElements = fixture.debugElement.queryAll((element) => {
      return element.nativeElement.class == 'span'
    });
    expect(debugElements[0].nativeElement).toBe("span");
  });
});
