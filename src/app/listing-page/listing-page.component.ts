import { Component, OnInit } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../models/movie';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-listing-page',
  standalone: true,
  imports: [FilterComponent,
    CardComponent,
    CommonModule,
  ],

  templateUrl: './listing-page.component.html',
  styleUrl: './listing-page.component.css'
})
export class ListingPageComponent implements OnInit {

  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.findAllMovies().subscribe((res: Movie[]) => {
      this.movies = res
      this.filteredMovies = [...this.movies];
    }, err => {
      console.error('A problem has accured during the API call ', err);

    })
  }

  onFilterChanges(filters: { titleInput: string | null, yearInput: number | null }) {
    this.filteredMovies = this.movies.filter(movie => {
      const titleMatch = !filters.titleInput || movie.title.toLocaleLowerCase().includes(filters.titleInput.toLocaleLowerCase());
      const yearMatch = !filters.yearInput || this.getYearFromDateString(movie.release_date).toString().includes(filters.yearInput.toString());
      return yearMatch && titleMatch
    }
    )
  }

  getYearFromDateString(dateString: string): number {
    const date = new Date(dateString);
    return date.getFullYear()
  }
}
