import { IMovie } from './../../models/movie.interface';
import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() set movie(movie: IMovie) {
    this._movie = movie;
  };

  get movie(): IMovie {
    return this._movie;
  }
  private _movie: IMovie;
  constructor() { }

  ngOnInit(): void {
  }



}
