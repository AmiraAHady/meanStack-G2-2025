import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  @Input() id!: string;
  selectedMovie!: any;

  constructor(private movieServ: MoviesService) {}

  ngOnInit(): void {
    this.movieServ.getMovieById(this.id).subscribe({
      next: (data) => {
        console.log(data);
        
        this.selectedMovie = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
