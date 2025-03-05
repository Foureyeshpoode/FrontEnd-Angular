import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  students:any[] = [];//creating 2 arrays both of type any -> (Students, weather)
  weather:any[] = [];
  temperature:any = "";
  constructor(private dataService:DataService){

  }

  ngOnInit():void{//creating ngOnInit function of type void
    this.dataService.getStudentData().subscribe(
      (data)=>{//passing data through arrow function
        this.students = data.students;//assigning student array to data.students i.e data from the json
      }
    );

    this.dataService.getWeatherData().subscribe(
      (data)=>{//passing data through arrow function
        this.weather = data.weather;//assigning student array to data.students i.e data from the json
        this.temperature = (data.main.temp - 273.15).toFixed(2);
      }
    );
  }
}
