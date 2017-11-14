import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MovieService } from '../services/movie-service.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css'],
  providers: [MovieService]
})
export class DetailMovieComponent implements OnInit {

  details: Object;
  seen = "";

  private similarMovies: Array<Object> = [];
  private movie: any = {};

  constructor(private service: MovieService,
    private router: Router,
    private route: ActivatedRoute) {
}
              
  ngOnInit() {
    console.log('MovieDetails')
    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.service.getMovieDetails(id))
      .subscribe(result => this.movie = result);
  }
  
// event binding
  public seenIt(){
    this.seen = "Cool!";
    if(this.seen)
    {
      return this.seen;
    }
  }
}
