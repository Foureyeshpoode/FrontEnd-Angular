import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavouritesService {
  private key = 'favourite_movies';

  getFavourites(): any[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  addFavourite(movie: any) {
    const current = this.getFavourites();
    const updated = [...current, movie];
    localStorage.setItem(this.key, JSON.stringify(updated));
  }

  removeFavourite(imdbID: string) {
    const current = this.getFavourites();
    const updated = current.filter(m => m.imdbID !== imdbID);
    localStorage.setItem(this.key, JSON.stringify(updated));
  }

  isFavourite(imdbID: string): boolean {
    return this.getFavourites().some(m => m.imdbID === imdbID);
  }
}
