import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TrailersServiceService } from '../shared/trailers-service.service';
import { Trailer } from '../shared/Trailer';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-new-movies-bar',
  templateUrl: './new-movies-bar.component.html',
  styleUrls: ['./new-movies-bar.component.css']
})
export class NewMoviesBarComponent {

  allTrailers!: Trailer[]

  constructor(private httpClient: HttpClient, private trailerService: TrailersServiceService,private sanitizer: DomSanitizer) { 
   
  }

  ngOnInit(): void {
    this.getTrailers();
   
  }

  getTrailers() {
    this.trailerService.getAllTrailers().subscribe(
      response => {
        this.allTrailers = response.map((trailer: Trailer) => {
          return {
            ...trailer,
            link: this.sanitizer.bypassSecurityTrustResourceUrl(trailer.link)
          };
        });
      }
    );
  }
  
    
    
  }