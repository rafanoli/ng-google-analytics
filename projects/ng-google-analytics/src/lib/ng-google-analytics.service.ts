import { Injectable, Optional } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var ga: Function;

export class AnalyticsIdConfig {
  id = '';
}

@Injectable({
  providedIn: 'root',
})
export class NgGoogleAnalyticsTracker {
  private _id = '';

  constructor(router: Router, @Optional() config: AnalyticsIdConfig) {
    this._id = config.id;
    this.appendGaTrackingCode(this._id);

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.url);
        ga('send', 'pageview');
      }
    });
  }

  public appendGaTrackingCode(id) {
    try {
      const script = document.createElement('script');
      script.innerHTML =
        `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', '` +
        id +
        `', 'auto');
      `;
      document.head.appendChild(script);
    } catch (ex) {
      console.error('Error appending google analytics');
      console.error(ex);
    }
  }

  public eventTracker(
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null
  ) {
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue,
    });
  }
}
