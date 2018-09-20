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
  movie: string
  pages: number[] = []
  

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.movie = this.route.snapshot.params['movie']
    const page = this.route.snapshot.params ['page']

    this.route.params.subscribe(
      (params: Params) => {
        this.movie = params['movie']
        const page = params['page']
        this.getMovies(this.movie, page)
      }
    )
  }

  getMovies(movie: string, page: number) {
    this.moviesService.getMovies(movie, page).subscribe(
      (response: any) => {
        this.pages = []
        console.log(response)
        this.movies = response.Search
        const total = response.totalResults
        const totalPages = Math.round(total/10)
        for(let i = 1; i <= totalPages; i++) {
          this.pages.push(i)
        }

      }, (error) => console.log(error)
    )
  }

}
