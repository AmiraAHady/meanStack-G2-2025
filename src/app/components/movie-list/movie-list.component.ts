import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieRatingComponent } from '../movie-rating/movie-rating.component';
import { MoviesService } from '../../services/movies.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [MovieRatingComponent, RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  listOfMovies: any[] = [];
  constructor(private movServObj: MoviesService) {}

  ngOnInit() {
    this.movServObj.getAllMovies().subscribe({
      next: (data) => {
        this.listOfMovies = data.results;
      },
    });
  }
  showMovie(movId: any) {
    console.log(movId);
  }
}
