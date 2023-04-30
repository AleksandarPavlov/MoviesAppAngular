import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { 

  }

  getTopMovies(){
    return this.httpClient.get<any>(`${this.apiUrl}/movies/best`)
   }

  getNewestMovies(page: number){
    return this.httpClient.get<any>(`${this.apiUrl}/movies/newest/` + page)
   }

  getAllCategories(){
    return this.httpClient.get<any>(`${this.apiUrl}/movies/categories`)
   }

}
