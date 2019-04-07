import { Route } from '@angular/router';
import RouteName from './routename';
import { HomeComponent } from './Module_App/home/home.component';
import { AboutmeComponent } from './Module_App/aboutme/aboutme.component';
import { SkillsComponent } from './Module_App/skills/skills.component';
import { PhotoComponent } from './Module_App/photo/photo.component';
import { AppComponent } from './app.component';
import { MobileMenuComponent, MenuItemComponent } from './Module_App/_shared/MobileMenu';
import { ExceptionComponent } from './Module_App/exceptions/exception.component';

export const AppRoutes: Route[] = [
  { path: '', redirectTo: `/fe/about`, pathMatch: 'full' },
  { path: 'fe/about', component: AboutmeComponent },
  { path: 'fe/home', component: HomeComponent },
  { path: 'fe/skills', component: SkillsComponent },
  { path: 'fe/skills/:group', component: SkillsComponent },
  { path: 'fe/photo', component: PhotoComponent },
  { path: 'fe/exception', component: ExceptionComponent },
  { path: 'fs/about', component: AboutmeComponent },
  { path: 'fs/home', component: HomeComponent },
  { path: 'fs/skills', component: SkillsComponent },
  { path: 'fs/skills/:group', component: SkillsComponent },
  { path: 'fs/photo', component: PhotoComponent },
  { path: 'fs/exception', component: ExceptionComponent },
  { path: '**', redirectTo: `/${RouteName.Exception}` }
];

export const RootComponents = [
  AppComponent, HomeComponent, MobileMenuComponent,
  MenuItemComponent, AboutmeComponent, SkillsComponent,
  PhotoComponent, ExceptionComponent
];
