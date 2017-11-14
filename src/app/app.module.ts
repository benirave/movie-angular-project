import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { AppRoutingModule } from './app-routing';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    TopRatedMoviesComponent,
    SearchMovieComponent,
    DetailMovieComponent,
    UpcomingMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
