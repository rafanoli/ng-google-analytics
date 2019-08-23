import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var ga: Function;

@Injectable({
  providedIn: 'root'
})
export class NgGoogleAnalyticsTracker {
  
  constructor(router: Router) {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.url);
        ga('send', 'pageview');
      }
    });

  }

  public eventTracker(eventCategory: string, eventAction: string, eventLabel: string = null, eventValue: number = null) {

    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });

  }

}
