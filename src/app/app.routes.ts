import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'details/:id', component: MovieDetailsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
//   waildCard ->last Route
  { path: '**', component: PageNotFoundComponent },
];
