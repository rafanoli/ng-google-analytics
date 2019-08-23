import { TestBed } from '@angular/core/testing';

import { NgGoogleAnalyticsService } from './ng-google-analytics.service';

describe('NgGoogleAnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgGoogleAnalyticsService = TestBed.get(NgGoogleAnalyticsService);
    expect(service).toBeTruthy();
  });
});
