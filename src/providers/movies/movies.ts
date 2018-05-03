import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//httpClient is need for get() and observable is the from of parameter that the function below reads in 

@Injectable()
export class MoviesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider');
  }

//this function gets an api from the web and returns it to the movies page function that then saves it to the movies array for output
  getMovies()
  {
    return this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=9c107ecc");
  }//getMovies

}
