import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MinutesToHoursPipe } from "../../pipes/minutes-to-hours.pipe";
import { MillionDollarsPipe } from "../../pipes/million-dollars.pipe";

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [CommonModule, MinutesToHoursPipe, MillionDollarsPipe]
})
export class CardComponent {

  @Input() movie: Movie | null = null;

  constructor(private router: Router) {
  }

  getMovieDetails(id: string) {
    if (id) this.router.navigate(['/details', id])
  }

}
