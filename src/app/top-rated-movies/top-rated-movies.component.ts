import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MoviesServiceService } from '../shared/movies-service.service';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent {

  movies!: Movie[]

  constructor(private httpClient: HttpClient, private moviesService: MoviesServiceService) { 
   
  }

  ngOnInit(): void {
    this.getTopRatedMovies();
  }

  getTopRatedMovies(){
    this.moviesService.getTopMovies().subscribe(
      response => {
        this.movies = response
      })
  }
}
