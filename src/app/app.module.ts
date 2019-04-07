import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutes, RootComponents } from './app.route';
import { EventService } from './Module_App/_shared/services/event.service';
import { AppMaterialModule } from './material.modual';
import { AppService } from './Module_App/_shared/services/app.service';

@NgModule({
  declarations: RootComponents,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // application level modules
    AppMaterialModule,
    // DO NOT import any lazy-loading module here!!
    RouterModule.forRoot(AppRoutes, {
      useHash: true
      // scrollPositionRestoration: 'enabled'
    }),
  ],
  providers: [EventService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
