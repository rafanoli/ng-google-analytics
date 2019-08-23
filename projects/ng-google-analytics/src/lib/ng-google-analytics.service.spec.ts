import { TestBed } from '@angular/core/testing';

import { NgGoogleAnalyticsTracker } from './ng-google-analytics.service';

describe('NgGoogleAnalyticsTracker', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgGoogleAnalyticsTracker = TestBed.get(NgGoogleAnalyticsTracker);
    expect(service).toBeTruthy();
  });
});
