import { TestBed } from '@angular/core/testing';

import { NgGoogleAnalyticsTracker } from './ng-google-analytics.service';

describe('NgGoogleAnalyticsService', () => {
  let service: NgGoogleAnalyticsTracker;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgGoogleAnalyticsTracker);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
