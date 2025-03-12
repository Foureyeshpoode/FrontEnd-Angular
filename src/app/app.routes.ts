import { Routes } from '@angular/router';

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
    path: 'ulster',
    loadComponent: () => import('./ulster/ulster.page').then( m => m.UlsterPage)
  },
  {
    path: 'munster',
    loadComponent: () => import('./munster/munster.page').then( m => m.MunsterPage)
  },
  {
    path: 'connaught',
    loadComponent: () => import('./connaught/connaught.page').then( m => m.ConnaughtPage)
  },
  {
    path: 'leinster',
    loadComponent: () => import('./leinster/leinster.page').then( m => m.LeinsterPage)
  },
  {
    path: 'leinstercounties',
    loadComponent: () => import('./leinstercounties/leinstercounties.page').then( m => m.LeinstercountiesPage)
  },
  {
    path: 'connaughtcounties',
    loadComponent: () => import('./connaughtcounties/connaughtcounties.page').then( m => m.ConnaughtcountiesPage)
  },
  {
    path: 'ulstercounties',
    loadComponent: () => import('./ulstercounties/ulstercounties.page').then( m => m.UlstercountiesPage)
  },
  {
    path: 'munstercounties',
    loadComponent: () => import('./munstercounties/munstercounties.page').then( m => m.MunstercountiesPage)
  },
];
