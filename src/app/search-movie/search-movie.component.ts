// TODO: do

import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie-service.service';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  
    constructor(private service: MovieService) {
    }

    ngOnInit() {
      
    }
}
