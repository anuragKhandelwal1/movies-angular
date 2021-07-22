import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IMovie } from './models/movie.interface';

const URL = environment.API_URL;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<IMovie> {
    return this.http.get<IMovie>(`${URL}&t=`)
  }

  getMoviesBySearch(movieName: string): Observable<IMovie> {
    return this.http.get<IMovie>(`${URL}&t=${movieName}`);
  }
}
