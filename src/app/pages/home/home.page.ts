import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class HomePage implements OnInit {
  trending: any[] = [];
  popularMovies: any[] = [];
  popularTV: any[] = [];
  popularAnimation: any[] = [];

  constructor(private tmdb: TmdbService, private router: Router) {}

  ngOnInit() {
    this.tmdb.getTrending().subscribe((res: any) => this.trending = res.results);
    this.tmdb.getPopular().subscribe((res: any) => this.popularMovies = res.results);
    this.tmdb.getPopularTV().subscribe((res: any) => this.popularTV = res.results);
    this.tmdb.getPopularAnimation().subscribe((res: any) => this.popularAnimation = res.results);
  }

  goToDetails(id: string) {
    this.router.navigate(['/movie-details', id], {
      queryParams: { from: 'home' }
    });
  }
}
