import { Component } from '@angular/core';
import { MoviesProvider } from '../../providers/movies/movies';

@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {

movies: any[]=[];
  constructor(private mp: MoviesProvider) {}//constructor

  ionViewDidLoad()
  {
   this.mp.getMovies().subscribe(data=> {this.movies = data.Search});
  }//getMovies

}
