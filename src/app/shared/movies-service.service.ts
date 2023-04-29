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

  getAllMovies(){
    return this.httpClient.get<any>(`${this.apiUrl}/movies`)
   }

  getAllCategories(){
    return this.httpClient.get<any>(`${this.apiUrl}/movies/categories`)
   }

}
