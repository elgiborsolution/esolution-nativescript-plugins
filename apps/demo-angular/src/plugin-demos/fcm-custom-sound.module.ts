import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FcmCustomSoundComponent } from './fcm-custom-sound.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FcmCustomSoundComponent }])],
  declarations: [FcmCustomSoundComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FcmCustomSoundModule {}
