import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  // httpClient(built-in service)
  constructor(private http: HttpClient) {}
  // observable
  // Async
  getAllMovies(): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=Your_api_key&page=2`
    );
  }
}
