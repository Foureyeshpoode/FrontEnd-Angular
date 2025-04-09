import { Routes } from '@angular/router';

<<<<<<< Updated upstream
export const routes: Routes = [];
=======
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'status',
    loadComponent: () => import('./status/status.page').then( m => m.StatusPage)
  },
];
>>>>>>> Stashed changes
