import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ListingPageComponent } from './listing-page.component';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { MovieService } from '../Services/movie.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Movie } from '../models/movie';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListingPageComponent', () => {
  let component: ListingPageComponent;
  let fixture: ComponentFixture<ListingPageComponent>;
  let movieService: jasmine.SpyObj<MovieService>;

  let movies: Movie[] = [
    {
      box_office: "797.4",
      budget: "130",
      cinematographers: ["Michael Seresin"],
      duration: "142",
      id: "ab80790f-0f6d-4ca7-bd7e-e7e1f06e6982",
      poster: "https://www.wizardingworld.com/images/products/films/rectangle-3.png",
      producers: ["Chris Columbus", "David Heyman", "Mark Radcliffe"],
      release_date: "2002-11-15",
      summary: " After unintentionally using magic against Aunt Marge, Harry arrives at the Leaky Cauldron and learns that a killer named Sirius Black is after him. Hogwarts is under a dark and grim spell with Dementors, the ghostly guardians of Azkaban, looking for Black. Harry and his friends spend their third year learning how to handle a half-horse half-eagle Hippogriff, repel shape-shifting Boggarts and master the art of Divination. Harry also inherits a strange map and finds out the truth about Sirius Black being his godfather. Battling against dementors and werewolves, an incredible story unfolds as Harry masters advanced magic, crosses the barriers of time and changes the course of more than one life.",
      title: "Harry Potter and the Prisoner of Azkaban"
    },

    {
      box_office: "797.4",
      budget: "130",
      cinematographers: ["Michael Seresin"],
      duration: "142",
      id: "ab80790f-0f6d-4ca7-bd7e-e7e1f06e6982",
      poster: "https://www.wizardingworld.com/images/products/films/rectangle-3.png",
      producers: ["Chris Columbus", "David Heyman", "Mark Radcliffe"],
      release_date: "2002-11-15",
      summary: " After unintentionally using magic against Aunt Marge, Harry arrives at the Leaky Cauldron and learns that a killer named Sirius Black is after him. Hogwarts is under a dark and grim spell with Dementors, the ghostly guardians of Azkaban, looking for Black. Harry and his friends spend their third year learning how to handle a half-horse half-eagle Hippogriff, repel shape-shifting Boggarts and master the art of Divination. Harry also inherits a strange map and finds out the truth about Sirius Black being his godfather. Battling against dementors and werewolves, an incredible story unfolds as Harry masters advanced magic, crosses the barriers of time and changes the course of more than one life.",
      title: "Harry Potter and the philosopher stone"
    },
  ];

  beforeEach(async () => {
    movieService = jasmine.createSpyObj('MovieService', ['findAllMovies']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers : [{provide: MovieService, useValue: movieService},HttpHandler]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch movies on init', () => {
    movieService.findAllMovies.and.returnValue(of(movies));
    fixture.detectChanges();

    expect(component.movies).toEqual(movies);
    expect(component.filteredMovies).toEqual(movies);
  });

  it('should filter movies', () => {
    component.movies = movies;

    component.onFilterChanges({ titleInput: 'Harry Potter and the Prisoner of Azkaban', yearInput: null });

    expect(component.filteredMovies.length).toBe(1);
    expect(component.filteredMovies[0].title).toBe('Harry Potter and the Prisoner of Azkaban');
  });

  it('should get year from date string', () => {
    const dateString = '2002-11-15';
    const year = component.getYearFromDateString(dateString);
    expect(year).toBe(2002);
  });

});
