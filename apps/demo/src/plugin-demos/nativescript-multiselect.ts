import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptMultiselect } from '@demo/shared';
import {} from '@elgibor-solution/nativescript-multiselect';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptMultiselect {}
