import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MoviesServiceService } from '../shared/movies-service.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  allCategories!: string[]

  constructor(private httpClient: HttpClient, private moviesService: MoviesServiceService) { 
   
  }

  ngOnInit(): void {
    this.getCategories();
   
  }

  getCategories(){
    this.moviesService.getAllCategories().subscribe(
      response => {
        this.allCategories = response
      })
      }
}
