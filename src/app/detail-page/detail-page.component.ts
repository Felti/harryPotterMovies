import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../Services/movie.service';
import { CommonModule, Location } from '@angular/common';
import { MinutesToHoursPipe } from "../pipes/minutes-to-hours.pipe";
import { MillionDollarsPipe } from "../pipes/million-dollars.pipe";

@Component({
  selector: 'app-detail-page',
  standalone: true,
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css',
  imports: [CommonModule, MinutesToHoursPipe, MillionDollarsPipe]
})
export class DetailPageComponent implements OnInit {

  detailsId: string | null = '';
  movie: Movie | null = null;

  constructor(private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.detailsId = params.get('id');
      this.getDetailMovies(this.detailsId)
      console.log("id : ", this.detailsId);

    })
  }

  getDetailMovies(id: string | null) {
    if (id) {
      this.movieService.findById(id).subscribe((res: Movie) => {
        if (res) {
          this.movie = res
        }

      })
    }
  }

  goBack() {
    this.location.back()
  }

}
