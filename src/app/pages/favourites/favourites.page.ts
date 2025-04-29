import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../../services/favourites.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class FavouritesPage implements OnInit {
  favourites: any[] = [];

  constructor(private favService: FavouritesService, private router: Router) {}

  ngOnInit() {
    this.loadFavourites();
  }

  ionViewWillEnter() {
    this.loadFavourites();
  }

  loadFavourites() {
    this.favourites = this.favService.getFavourites();
  }

  goToDetails(id: string) {
    this.router.navigate(['/movie-details', id], { queryParams: { from: 'favourites' } });
  }

  removeFromFavourites(id: string) {
    this.favService.removeFavourite(id);
    this.loadFavourites();
  }
}
