import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptMultiselectComponent } from './nativescript-multiselect.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptMultiselectComponent }])],
  declarations: [NativescriptMultiselectComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptMultiselectModule {}
