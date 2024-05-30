import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardComponent } from './card.component';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let mockRouter: Router;


  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should navigate to movieDetails when getMovieDetails is called with id', () => {
    const movie: Movie = {
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
    };

    component.getMovieDetails(movie.id);

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/details', movie.id]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
