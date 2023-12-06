import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptSentry } from '@demo/shared';
import {} from '@esolution/nativescript-sentry';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptSentry {}
