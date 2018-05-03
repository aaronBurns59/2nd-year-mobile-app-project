import { Component } from '@angular/core';
import { MoviesProvider } from '../../providers/movies/movies';//this page needs a method from the provider so it needs to be imported

@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {

  movies: any; //declare variable movies of type any (for objects)

  constructor(private mp: MoviesProvider) { }//constructor

  ionViewWillEnter() {
    this.mp.getMovies().subscribe(data => { 
      console.log(data) //when this page is loaded this method calls the getMovies method from the movies provider
      this.movies = data}); 
  }//getMovies                                                          Data from online api is then saved into the movies array

}
