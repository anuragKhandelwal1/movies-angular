import { IMovie } from './models/movie.interface';
import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Like Movies';
  searchedMovie: IMovie;
  constructor(private apiService: ApiService) { }

  searchValueChange(searchValue: string): void {
    this.apiService.getMoviesBySearch(searchValue)
      .subscribe((movie: IMovie) => {
        this.searchedMovie = movie;
      });
  }
}
