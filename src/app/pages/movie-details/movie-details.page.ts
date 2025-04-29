import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  standalone: true,
  selector: 'app-movie-details',
  imports: [CommonModule, IonicModule],
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss']
})
export class MovieDetailsPage implements OnInit {
  movieId!: string;
  imdbId!: string;
  movie: any;
  isLoading = true;
  isFavourite = false;
  backLink = 'search';

  private tmdbApiKey = '01be14854555e57e62f7557821a53b3a';
  private omdbApiKey = 'e664df8';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private favService: FavouritesService
  ) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id')!;
    const fromPage = this.route.snapshot.queryParamMap.get('from');
    if (fromPage) {
      this.backLink = fromPage;
    }

    console.log('Movie ID received:', this.movieId);

    if (this.movieId.startsWith('tt')) {
      console.log('Detected IMDb ID — using OMDb directly');
      this.fetchMovieDetails(this.movieId);
    } else {
      console.log('Detected TMDb ID — fetching IMDb ID first');
      this.getIMDbIdFromTMDb(this.movieId);
    }
  }

  getIMDbIdFromTMDb(tmdbId: string) {
    console.log('Fetching external_ids for TMDb ID:', tmdbId);
    this.http.get(`https://api.themoviedb.org/3/movie/${tmdbId}/external_ids?api_key=${this.tmdbApiKey}`)
      .subscribe({
        next: (data: any) => {
          console.log('TMDb Response:', data);
          this.imdbId = data.imdb_id;
          if (this.imdbId) {
            this.fetchMovieDetails(this.imdbId);
          } else {
            console.error('IMDb ID not found from TMDb.');
            this.isLoading = false;
          }
        },
        error: (err) => {
          console.error('TMDb external_ids failed:', err);
          this.isLoading = false;
        }
      });
  }

  fetchMovieDetails(imdbId: string) {
    console.log('Fetching movie from OMDb:', imdbId);
    this.http.get(`http://www.omdbapi.com/?apikey=${this.omdbApiKey}&i=${imdbId}`)
      .subscribe((data: any) => {
        console.log('OMDb Response:', data);
        this.movie = data;
        this.isFavourite = this.favService.isFavourite(imdbId);
        this.isLoading = false;
      });
  }

  toggleFavourite() {
    if (this.isFavourite) {
      this.favService.removeFavourite(this.movie.imdbID);
    } else {
      this.favService.addFavourite(this.movie);
    }
    this.isFavourite = !this.isFavourite;
  }
}
