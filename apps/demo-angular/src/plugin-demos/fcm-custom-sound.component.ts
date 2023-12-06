import { Component, NgZone } from '@angular/core';
import { DemoSharedFcmCustomSound } from '@demo/shared';
import {} from '@elgibor-solution/fcm-custom-sound';

@Component({
  selector: 'demo-fcm-custom-sound',
  templateUrl: 'fcm-custom-sound.component.html',
})
export class FcmCustomSoundComponent {
  demoShared: DemoSharedFcmCustomSound;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedFcmCustomSound();
  }
}
