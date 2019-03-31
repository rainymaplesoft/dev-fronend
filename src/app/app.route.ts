import { Route } from '@angular/router';
import { HomeComponent } from './Module_App/home/home.component';

export const AppRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' }
];
