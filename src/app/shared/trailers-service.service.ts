import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrailersServiceService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { 
    
  }

  getAllTrailers(){
    return this.httpClient.get<any>(`${this.apiUrl}/trailers`)
   }

}
