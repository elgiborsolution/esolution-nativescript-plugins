import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fcm-custom-sound', loadChildren: () => import('./plugin-demos/fcm-custom-sound.module').then((m) => m.FcmCustomSoundModule) },
  { path: 'nativescript-multiselect', loadChildren: () => import('./plugin-demos/nativescript-multiselect.module').then((m) => m.NativescriptMultiselectModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
