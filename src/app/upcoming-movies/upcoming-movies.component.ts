import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MovieService } from '../services/movie-service.service';


@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css'],
  providers: [MovieService]
})
export class UpcomingMoviesComponent implements OnInit {
  
  upcomingMovies: Array<Object>;

  constructor(private service: MovieService,
              private router: Router,
              private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.service.getUpcomingMovies()
    .subscribe(
      response => { 
        console.log('UpcomingMovies')
        console.log(response.results)
        this.upcomingMovies = response.results;
    })
  }
}
