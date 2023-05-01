import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MoviesByGenreComponent } from './movies-by-genre/movies-by-genre.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'chart/top', component: TopRatedMoviesComponent},
  { path: 'genre/:category', component: MoviesByGenreComponent},
  { path: '**', component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
