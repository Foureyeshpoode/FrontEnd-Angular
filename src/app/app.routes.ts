import { Routes } from '@angular/router';
import { MenuPage } from './pages/menu/menu.page';

export const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
      { path: 'search', loadComponent: () => import('./pages/search/search.page').then(m => m.SearchPage) },
      { path: 'favourites', loadComponent: () => import('./pages/favourites/favourites.page').then(m => m.FavouritesPage) },
      { path: 'movie-details/:id', loadComponent: () => import('./pages/movie-details/movie-details.page').then(m => m.MovieDetailsPage) },
    ]
  }
];
