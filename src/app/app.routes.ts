import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'project/:id',
    loadComponent: () => import('./project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
  }
];
