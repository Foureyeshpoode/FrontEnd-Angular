import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }//passing httpClient instance through the constrcutor -> httpClient is of type HttpClient => httpClient:HttpClient

  getStudentData():Observable<any>//assinging type Observable to getStudentsData so we can view data from the json
  {
    return this.httpClient.get('https://jsonblob.com/api/jsonblob/1346788673299079168');//returning the json data from this url
  }

  getWeatherData():Observable<any>{
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');//returning the json data from this url
  }

}
