import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService {

    private api: string = 'http://localhost:4200'

    constructor(private http: HttpClient) { }

    findAllMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${this.api}/movies`)
    }

    findById(id: string): Observable<Movie> {
        return this.http.get<Movie>(`${this.api}/movies/${id}`)
    }
}
