import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    TopRatedMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
