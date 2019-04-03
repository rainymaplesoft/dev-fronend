import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './Module_App/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutes, RootComponents } from './app.route';
import { MobileMenuComponent, MenuItemComponent } from './Module_App/_shared/MobileMenu';
import { EventService } from './Module_App/_shared/services/event.service';
import { AppMaterialModule } from './material.modual';
import 'hammerjs';
import { AboutmeComponent } from './Module_App/aboutme/aboutme.component';
import { SkillsComponent } from './Module_App/skills/skills.component';
import { PhotoComponent } from './Module_App/photo/photo.component';

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
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
