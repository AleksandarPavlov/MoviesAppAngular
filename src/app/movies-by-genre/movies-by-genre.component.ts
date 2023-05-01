import { Component } from '@angular/core';
import { Movie } from '../shared/Movie';
import { HttpClient } from '@angular/common/http';
import { MoviesServiceService } from '../shared/movies-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent {

  movies!: Movie[]
  category!: string
  allCategories!: string[]

  constructor(private httpClient: HttpClient, private moviesService: MoviesServiceService, private route: ActivatedRoute, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.getCategories();

    this.route.paramMap.subscribe(params => {
      this.category = params.get('category')!;
      this.getMoviesByCategory();
    });


  }

  getCategories() {
    this.moviesService.getAllCategories().subscribe(
      response => {
        this.allCategories = response;
        this.getMoviesByCategory();
      }
    );
  }
  
  getMoviesByCategory() {
    if (this.allCategories.includes(this.category)) {
      this.moviesService.getMoviesByCategory(this.category).subscribe(
        response => {
          this.movies = response;
        }
      );
    } else {
      this.router.navigate(['/not-found']);
    }
  }
  
  
  
  

  sortList(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.moviesService.getTopMoviesSorted(value).subscribe(
      response => {
        this.movies = response
      })
  }

 
}
