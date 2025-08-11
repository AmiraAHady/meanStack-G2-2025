import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieRatingComponent } from '../movie-rating/movie-rating.component';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-list',
  imports: [FormsModule, DatePipe, MovieRatingComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  searchValue = '';
  userRate = 0;
  listOfMovies: any[] = [];
  constructor(private movServObj: MoviesService) {
    this.movServObj.getAllMovies().subscribe({
      next: (data) => {
        this.listOfMovies = data.results;
      },
    });
  }
  addRate(newRate: number) {
    this.userRate = newRate;
    alert(`User Rate this movie with :${this.userRate}`);
  }

  reciveChildData(message: string) {
    console.log(`i reciver You message:${message}`);
  }
}
