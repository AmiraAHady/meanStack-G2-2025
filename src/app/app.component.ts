import { Component } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
// metadata 
// decorator
@Component({
  selector: 'app-root',
  imports: [NavbarComponent,MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // entry point
  title = 'meanG2';
}
