import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesServiceService } from '../shared/movies-service.service';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  allMovies!: Movie[]

  constructor(private httpClient: HttpClient, private moviesService: MoviesServiceService) { 
   
  }

  ngOnInit(): void {
    this.getMovies();
   
  }

  getMovies(){
    this.moviesService.getAllMovies().subscribe(
      response => {
        this.allMovies = response
      })
      }
}
