import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-leinstercounties',
  templateUrl: './leinstercounties.page.html',
  styleUrls: ['./leinstercounties.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, CommonModule, FormsModule]
})
export class LeinstercountiesPage implements OnInit {

  constructor() { }

  counties: string[] = ["Carlow", "Dublin", "Kildare",
    "Kilkenny", "Laois", "Longford", "Louth", "Meath",
    "Offaly", "Westmeath", "Wexford", "Wicklow"];
    
  ngOnInit() {

  }

}
