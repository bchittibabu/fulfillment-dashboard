import { Routes } from "@angular/router";
export const PatientRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../patients/patients/patients.component').then((x) => x.PatientsComponent),
    pathMatch: 'full'
  }
]
