import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'e664df8';
  private baseUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?apikey=${this.apiKey}&s=${title}`);
  }

  getMovieDetails(imdbID: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?apikey=${this.apiKey}&i=${imdbID}`);
  }
}
