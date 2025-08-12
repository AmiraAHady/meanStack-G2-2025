import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey = '0ab69d58b9382bc390a939b7dbbe713b';
  constructor(private http: HttpClient) {}
  getAllMovies(): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`
    );
  }

  getMovieById(id: string):Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`
    );
  }
}
