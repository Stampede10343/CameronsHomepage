import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { ContactComponent } from './contact.component';
import { Angulartics2 } from 'angulartics2';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    const analytics = jasmine.createSpyObj('piwik', ['startTracking']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [ ContactComponent ],
      providers: [
        { provide: Angulartics2, useValue: analytics },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
