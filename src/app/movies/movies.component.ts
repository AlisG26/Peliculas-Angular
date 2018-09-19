import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[]

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const movie = this.route.snapshot.params['movie']
    const page = this.route.snapshot.params ['page']
    const type = this.route.snapshot.params ['type']

    this.route.params.subscribe(
      (params: Params) => {
        const movie = params['movie']
        const page = params['page']
        const type = params ['type']
        this.getMovies(movie, page, type)
      }
    )
  }

  getMovies(movie: string, page: number, type: string) {
    this.moviesService.getMovies(movie, page).subscribe(
      (response: any) => {
        console.log(response)
        this.movies = response.Search
      }, (error) => console.log(error)
    )
  }

}
