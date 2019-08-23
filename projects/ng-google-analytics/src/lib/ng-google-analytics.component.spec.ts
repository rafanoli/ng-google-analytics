import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGoogleAnalyticsComponent } from './ng-google-analytics.component';

describe('NgGoogleAnalyticsComponent', () => {
  let component: NgGoogleAnalyticsComponent;
  let fixture: ComponentFixture<NgGoogleAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGoogleAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGoogleAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
