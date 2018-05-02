import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class MoviesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }

  getMovies(): Observable<any>
  {
    console.log("It works");
    return this.http.get("https://jsonblob.com/api/jsonBlob/5bb96ec9-4d58-11e8-a9ee-3b5ebb7d6018");// Problem with json fix
  }//getMovies

}
