import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'photos',
    loadComponent: () => import('./pages/photos/photos.page').then((m) => m.PhotosPageComponent),
  },
  {
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full',
  },
];
