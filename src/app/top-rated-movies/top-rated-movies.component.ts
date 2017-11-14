import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie-service.service';
import { Response } from '@angular/http/src/static_response';


@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css'],
  providers: [MovieService]
})
export class TopRatedMoviesComponent implements OnInit {
  
  topRatedMovies: Array<Object>;

  constructor(private service: MovieService) {
    }

  ngOnInit() {
    this.service.getTopRatedMovies()
    .subscribe(
      response => { 
        console.log('TopRatedMovies')
        console.log(response.results)
        this.topRatedMovies = response.results;
    })
  }
}
