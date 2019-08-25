import { Component, OnInit } from '@angular/core';
import { NgGoogleAnalyticsTracker } from 'ng-google-analytics';
// import { NgGoogleAnalyticsTracker } from '../../ng-google-analytics/ng-google-analytics.service';

@Component({
  selector: 'app-implement-pkg',
  templateUrl: './implement-pkg.component.html',
  styleUrls: ['./implement-pkg.component.scss']
})
export class ImplementPkgComponent implements OnInit {

  constructor(public ngGoogleAnalytics: NgGoogleAnalyticsTracker) { }

  ngOnInit() {
  }

}
