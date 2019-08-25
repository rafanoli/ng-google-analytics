# NgGoogleAnalytics

Angular plugin for track pages and events with Google Analytics.

## Why should I use it?

If you want an easy implementation through Google Analytics in your application, you should consider using this plugin. 

It supplies:

* Automatic Google Analytics script loading
* Automatic page tracking
* Event tracker


## Requirements

Angular ^2.0.0

## Get Started
### Installation

```bash
npm install ng-google-analytics
```

After installation complete, in **app.module.ts** import the NgGoogleAnalytics.

If you want Google Analytics starting tracking your application, just copy and paste the Google Analytics ID provided.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NgGoogleAnalyticsModule } from 'ng-google-analytics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgGoogleAnalyticsModule.forRoot({ id: 'UA-XXXXX-X' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

After you insert the Google Analytics ID in your app.module, the page tracking start! 

This is the easy way for start tracking your application. Remember to insert the ID provided by Google Analytics.

```js
NgGoogleAnalyticsModule.forRoot({ id: 'UA-XXXXX-X' })
```

## Event Tracking
Event tracking can be achieved with just one *import* in the component or page you desire. 

```js
import { NgGoogleAnalyticsTracker } from 'ng-google-analytics';
```

Then you have to declare it in your constructor like the example below:
```js
constructor(public ngAnalytics: NgGoogleAnalyticsTracker) { }
```

Lastly, just call it when you want to tracker an event, or send some event information to Google Analytics.
```js
this.ngAnalytics.eventTracker('category', 'action', 'label', 1);
```
If you get stuck in how to use event tracking you can read some documentation in official Analytics Website.

[Event Measurement](https://developers.google.com/analytics/devguides/collection/analyticsjs/events)


# Issues and features requests

Please drop an issue, if you find something that doesn't work, or a feature request.

Follow me on twitter [@rafanoli](https://twitter.com/rafanoli)