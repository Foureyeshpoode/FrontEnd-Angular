import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-munstercounties',
  templateUrl: './munstercounties.page.html',
  styleUrls: ['./munstercounties.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MunstercountiesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
