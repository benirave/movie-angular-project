import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class MovieService {
  private apikey = '?api_key=18f7d642ad10180052c2c8e90fbd56a9&language=en-US&page=1';
  private baseUrl = 'https://api.themoviedb.org/3/';
  private movie = 'movie/';
  private sortByPopularity = '&sort_by=popularity.desc';  
  
  constructor(private http: Http) {
    console.log('Service Started!')
  }

  // Methods

  public getPopularMovies() {
    return this.http.get(this.baseUrl + this.movie + 'popular' + this.apikey)
      .map(result => result.json())
  }

  public getTopRatedMovies() {
    return this.http.get(this.baseUrl + this.movie + 'top_rated' + this.apikey)
      .map(result => result.json())
  }

  public searchMovies(query) {
    return this.http.get(this.baseUrl + 'search/movie' + '&query=' + query + this.sortByPopularity + this.apikey)
      .map(result => result.json())
  }

  public getMovieDetails(id) {
    return this.http.get(this.baseUrl + this.movie + id + this.apikey)
      .map(result => result.json())
  }

  public getUpcomingMovies() {
    return this.http.get(this.baseUrl + this.movie + 'upcoming' + this.apikey)
      .map(result => result.json())
  }

}