import { Component } from '@angular/core';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  search: string = ''
  type: string = 's'
  page: number = 1
  

  constructor(private router: Router) {}

  searchMovies() {
    if(this.search.length > 0) {

      this.router.navigate(['/movies', this.search, this.type, this.page])
    } else {
      alert('Ingrese un título para empezar la búsqueda')
    }
  }
}
