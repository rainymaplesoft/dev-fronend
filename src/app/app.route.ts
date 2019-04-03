import { Route } from '@angular/router';
import { HomeComponent } from './Module_App/home/home.component';
import { AboutmeComponent } from './Module_App/aboutme/aboutme.component';
import { SkillsComponent } from './Module_App/skills/skills.component';
import { PhotoComponent } from './Module_App/photo/photo.component';
import { AppComponent } from './app.component';
import { MobileMenuComponent, MenuItemComponent } from './Module_App/_shared/MobileMenu';

export const AppRoutes: Route[] = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutmeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'photo', component: PhotoComponent },
  { path: '**', redirectTo: '/about' }
];

export const RootComponents = [
  AppComponent, HomeComponent, MobileMenuComponent, MenuItemComponent, AboutmeComponent, SkillsComponent, PhotoComponent
];
