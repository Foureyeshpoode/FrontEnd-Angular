import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Browser } from '@capacitor/browser';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  location:any = "";
  latitude:number = 0;
  longtitude:number = 0;

  constructor() {}

  async openBrowser(){
    await Browser.open({ url: 'http://capacitorjs.com/' });
  }

  async getLocation(){
    this.location = await Geolocation.getCurrentPosition();
    this.latitude = this.location.coords.latitude;
    this.longtitude = this.location.coords.longtitude;
    console.log(this.location);
}
}
