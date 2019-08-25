import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';


//Service
import { NgGoogleAnalyticsTracker } from './ng-google-analytics.service';
import { AnalyticsIdConfig } from './ng-google-analytics.service';

@NgModule({
    imports: [CommonModule],
})

export class NgGoogleAnalyticsModule {
    constructor(@Optional() @SkipSelf() parentModule: NgGoogleAnalyticsModule, public ngGoogleAnalytics: NgGoogleAnalyticsTracker) {
        if (parentModule) {
            throw new Error(
                'NgGoogleAnalyticsModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: AnalyticsIdConfig): ModuleWithProviders {
        return {
            ngModule: NgGoogleAnalyticsModule,
            providers: [
                { provide: AnalyticsIdConfig, useValue: config }
            ]
        };
    }

}
