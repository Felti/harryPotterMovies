import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPageComponent } from './detail-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MovieService } from '../Services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { Movie } from '../models/movie';

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;
  let mockActivatedRoute: ActivatedRoute;
  let mockMovieService: jasmine.SpyObj<MovieService>;
  let mockLocation: Location;

  beforeEach(async () => {
    mockActivatedRoute = {
      paramMap: of({
        get: (key: string) => 'ab80790f-0f6d-4ca7-bd7e-e7e1f06e6982'
      })
    } as ActivatedRoute;

    mockMovieService = jasmine.createSpyObj('MovieService', ['findById']);
    mockLocation = jasmine.createSpyObj('Location', ['back']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: MovieService, useValue: mockMovieService },
        { provide: Location, useValue: mockLocation },
        HttpHandler
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    mockMovieService.findById.and.returnValue(of({
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
    }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate back when goBack is called', () => {
    component.goBack();
    expect(mockLocation.back).toHaveBeenCalled();
  });

});
