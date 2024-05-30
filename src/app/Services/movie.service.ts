import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";
import { environment } from "../../environments/environment.prod";

@Injectable()
export class MovieService {
    
    //private readonly api: string = environment.apiUrl;

    private api: string = 'https://harry-potter-movies-jet.vercel.app'

    constructor(private http: HttpClient) { }

    findAllMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${this.api}/movies`)
    }

    findById(id: string): Observable<Movie> {
        return this.http.get<Movie>(`${this.api}/movies/${id}`)
    }
}
