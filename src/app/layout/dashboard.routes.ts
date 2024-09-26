import { Routes } from "@angular/router";
export const DashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout.component').then((x) => x.LayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'patients'
      },
      {
        path: 'patients',
        loadChildren: () => import('../patients/patients.route').then((x) => x.PatientRoutes)
      },
      {
        path: 'patients/:id',
        loadComponent: () => import('../patients/patient-detail/patient-detail.component').then((x) => x.PatientDetailComponent)
      },
      {
        path: 'devices',
        loadComponent: () => import('../devices/devices/devices.component').then((x) => x.DevicesComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('../orders/orders/orders.component').then((x) => x.OrdersComponent)
      },
    ],
  },


]
