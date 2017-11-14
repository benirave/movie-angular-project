import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Movie } from './Movie';

@Injectable()
export class MovieService {
  private apikey = '?api_key=18f7d642ad10180052c2c8e90fbd56a9&language=en-US&page=1';
  private baseUrl = 'https://api.themoviedb.org/3/';
  private movie = 'movie/';
  private sharedSearchResult: Array<Object> = [];
  
  constructor(private http: Http) {
    console.log('MoviesThemoviedbService started')
  }

  public getPopularMovies() {
    return this.http.get(this.baseUrl + this.movie + 'popular' + this.apikey)
      .map(result => result.json())
  }

}