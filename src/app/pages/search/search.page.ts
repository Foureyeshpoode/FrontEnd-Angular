import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-search',
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage {
  query = '';
  movies: any[] = [];
  isLoading = false;
  noResults = false;

  constructor(private http: HttpClient, private router: Router) {}

  search() {
    if (!this.query.trim()) {
      this.movies = [];
      return;
    }

    this.isLoading = true;
    this.noResults = false;

    this.http.get(`http://www.omdbapi.com/?apikey=e664df8&s=${this.query}`).subscribe((res: any) => {
      this.isLoading = false;
      if (res.Response === 'True') {
        this.movies = res.Search;
      } else {
        this.movies = [];
        this.noResults = true;
      }
    });
  }

  openMovie(id: string) {
    this.router.navigate(['/movie-details', id], {
      queryParams: { from: 'search' }
    });
  }  
}
