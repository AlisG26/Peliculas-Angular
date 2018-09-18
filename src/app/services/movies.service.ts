import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesService {
    constructor(private http: Http) {}

    apiKey: string = '60e9bdcb'

    getMovies(movie: string, page: number) {
        return this.http.get('http://www.omdbapi.com/?apikey='+ this.apiKey + '&s=' + movie + '&page=' + page)
            .pipe(map((response: Response) => {
                const data = response.json()
                return data
            }))
    }

    getMovie(id: string) {
        return this.http.get('http://www.omdbapi.com/?apikey='+ this.apiKey + '&i=' + id)
            .pipe(map((response: Response) => {
                const data = response.json()
                return data
            }))
    }
}