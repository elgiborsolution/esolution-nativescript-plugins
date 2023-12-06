import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSentryComponent } from './nativescript-sentry.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSentryComponent }])],
  declarations: [NativescriptSentryComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptSentryModule {}
