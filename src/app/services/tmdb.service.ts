import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = '01be14854555e57e62f7557821a53b3a';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getTrending(type: string = 'all') {
    return this.http.get(`${this.baseUrl}/trending/${type}/week?api_key=${this.apiKey}`);
  }

  getPopular(type: string = 'movie') {
    return this.http.get(`${this.baseUrl}/${type}/popular?api_key=${this.apiKey}`);
  }

  getPopularAnimation() {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16&sort_by=popularity.desc`);
  }

  getPopularTV() {
    return this.getPopular('tv');
  }
}