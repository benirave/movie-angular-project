import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

const appRoutes: Routes = [
    { path: 'app-popular-movies', component: PopularMoviesComponent },
    { path: 'app-top-rated-movies', component: TopRatedMoviesComponent },
    { path: 'app-detail-movie/:id', component: DetailMovieComponent },    
    { path: '', redirectTo: '/app-popular-movies', pathMatch: 'full' },
    { path: '**', component: PopularMoviesComponent }
    ];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

    export class AppRoutingModule { }