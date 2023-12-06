import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSentry } from '@demo/shared';
import { Sentry } from '@esolution/nativescript-sentry';

@Component({
  selector: 'demo-nativescript-sentry',
  templateUrl: 'nativescript-sentry.component.html',
})
export class NativescriptSentryComponent {
  demoShared: DemoSharedNativescriptSentry;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptSentry();
  }

  testError(): void {
    let errorVar: any;
    errorVar.getError();
  }
}
