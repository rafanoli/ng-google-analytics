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

If you want Google Analytics starting tracking you application, just copy and paste the Google Analytics ID provided.

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

# Issues and features requests

Please drop an issue, if you find something that doesn't work, or a feature request.

Follow me on twitter [@rafanoli](https://twitter.com/rafanoli)