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
  topMovies!: Movie[]
  newestMovies!: Movie[]
  currentPage = 1

  constructor(private httpClient: HttpClient, private moviesService: MoviesServiceService) { 
   
  }

  ngOnInit(): void {
    this.getTopMovies();
    const storedPage = localStorage.getItem("page");
    if (storedPage) {
        this.currentPage = parseInt(storedPage);
    }
    this.getNewestMovies(this.currentPage);
  }

  getTopMovies(){
    this.moviesService.getTopMovies().subscribe(
      response => {
        this.topMovies = response
      })
      }

  getNewestMovies(page: number){
      this.moviesService.getNewestMovies(page).subscribe(
        response => {
          this.newestMovies = response
        })
        }

        previousPage(){
          const storedPage = localStorage.getItem("page")!;
          if (storedPage) {
            if(this.currentPage != 1){
              this.currentPage = parseInt(storedPage) - 1
              this.getNewestMovies(this.currentPage)
            }
           }
           if(!storedPage){
            if(this.currentPage != 1){
             this.currentPage -=1;
             this.getNewestMovies(this.currentPage)
           }
          }
           localStorage.setItem("page", this.currentPage.toString())
        }

        nextPage(){
          const storedPage = localStorage.getItem("page")!;
           if (storedPage) {
            if(this.currentPage != 4){
            this.currentPage = parseInt(storedPage) + 1
            this.getNewestMovies(this.currentPage)
            }
          }
            if(!storedPage){
              if(this.currentPage != 4){
              this.currentPage +=1;
              this.getNewestMovies(this.currentPage)
            }
          }
            localStorage.setItem("page", this.currentPage.toString())
        }
        
        goToPage(page: number){
          if(page <= 4 && page >= 1){
            this.getNewestMovies(page)
            this.currentPage = page;
            localStorage.setItem("page", page.toString())
          }
          
        }
}
