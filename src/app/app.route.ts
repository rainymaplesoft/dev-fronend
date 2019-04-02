import { Route } from '@angular/router';
import { HomeComponent } from './Module_App/home/home.component';
import { AboutmeComponent } from './Module_App/aboutme/aboutme.component';
import { SkillsComponent } from './Module_App/skills/skills.component';

export const AppRoutes: Route[] = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutmeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', redirectTo: '/about' }
];
