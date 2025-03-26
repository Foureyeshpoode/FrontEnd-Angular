import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class HomePage implements OnInit{
  myMovies:any[] = [];
  constructor(private movieService:MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieData().subscribe(
      (data)=>{
        this.myMovies = data.Search;
      }
    );
  }
}
