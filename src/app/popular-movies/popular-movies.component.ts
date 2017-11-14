import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MovieService } from '../services/movie-service.service';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
  providers: [MovieService]
})
export class PopularMoviesComponent implements OnInit {
  
  popularMovies: Array<Object>;

  constructor(private service: MovieService,
              private router: Router,
              private route: ActivatedRoute) {
    }

  ngOnInit() {
    console.log('Running')

    this.service.getPopularMovies()
    .subscribe(
      response => { 
        console.log('PopularMovies')
        console.log(response.results)
        this.popularMovies = response.results;
    })
  }

}
