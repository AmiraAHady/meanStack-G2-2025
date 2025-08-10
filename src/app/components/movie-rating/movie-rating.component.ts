import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-rating',
  imports: [],
  templateUrl: './movie-rating.component.html',
  styleUrl: './movie-rating.component.css',
})
export class MovieRatingComponent {
  // second decorator
  @Input() myParentRating!: number;
  @Output() myCasting: EventEmitter<string> = new EventEmitter<string>();

  prodcastToParent() {
    console.log('child want to send to its parent');
    this.myCasting.emit('hello from Child');
  }
}
