import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadChildren:  () => import('./layout/dashboard.routes')
      .then(mod => mod.DashboardRoutes)
  },
  {
    path: '**',
    loadComponent: () => import('./others/page-not-found/page-not-found.component')
      .then(mod => mod.PageNotFoundComponent)
  }
];
