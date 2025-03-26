import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//importing httpClient
import { Observable } from 'rxjs';//importing observable

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }//initialising http client

  getMovieData():Observable<any>{//Observable updates the url data asynchronosly 
    return this.httpClient.get('https://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27');//url for json/api data
  }
}
