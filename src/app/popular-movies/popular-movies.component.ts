import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie-service.service';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
  providers: [MovieService]
})
export class PopularMoviesComponent implements OnInit {
  
  popularMovies: Array<Object>;

  constructor(private service: MovieService) {
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
