import { Route } from '@angular/router';
import { HomeComponent } from './Module_App/home/home.component';
import { AboutmeComponent } from './Module_App/aboutme/aboutme.component';
import { SkillsComponent } from './Module_App/skills/skills.component';

export const AppRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutmeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', redirectTo: '/home' }
];
