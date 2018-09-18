import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any;
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    for (let key in this.movie) this.movie[key] = '';
    this.moviesService.getMovie(id).subscribe(
      (response: any) => {
        this.movie = response
        console.log(this.movie)
      }
    )
    // this.getMovie(id)

     this.route.params.subscribe(
       (params: Params) => {
         const id = params['id']
         this.getMovie(id)
       }
     )
  }

  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe(
      (response: any) => {
        console.log(response)
        this.movie = response;
      }, (error) => console.log(error)
    )
  }

}
