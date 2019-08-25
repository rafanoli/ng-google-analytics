import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ImplementPkgComponent } from './components/implement-pkg/implement-pkg.component';

//Library
import { NgGoogleAnalyticsModule } from './ng-google-analytics/ng-google-analytics.module';
// import { NgGoogleAnalyticsModule } from 'ng-google-analytics';


const appRoutes: Routes = [
  { path: '', component: ImplementPkgComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ImplementPkgComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgGoogleAnalyticsModule.forRoot({id: 'UA-146170808-1'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
