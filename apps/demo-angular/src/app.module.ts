import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [AppRoutingModule, NativeScriptModule],

  bootstrap: [AppComponent],

  schemas: [NO_ERRORS_SCHEMA],

  declarations: [AppComponent, HomeComponent],
})
export class AppModule {}
