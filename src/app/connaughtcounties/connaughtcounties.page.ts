import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-connaughtcounties',
  templateUrl: './connaughtcounties.page.html',
  styleUrls: ['./connaughtcounties.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, CommonModule, FormsModule]
})
export class ConnaughtcountiesPage implements OnInit {

  constructor() { }

  counties: string[] = ["Galway", "Mayo", "Roscommon", "Sligo", "Leitrim"];

  ngOnInit() {
  }

}
