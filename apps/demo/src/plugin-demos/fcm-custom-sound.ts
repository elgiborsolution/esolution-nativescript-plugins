import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFcmCustomSound } from '@demo/shared';
import {} from '@elgibor-solution/fcm-custom-sound';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFcmCustomSound {}
