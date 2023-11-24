import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // propiedades
  private urlBase:string = "https://api.themoviedb.org/3/search/movie?query=";
  private urlById = "https://api.themoviedb.org/3/movie/";
  private baseMoviesList = new BehaviorSubject<any[]>([]);
  private headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzJiZTQ1YTdhOWMzOWFkNDAwYzQ2MjUwY2QxNWMwNiIsInN1YiI6IjY1NTMwNTkwZmI1Mjk5MDBlMzBhZWU5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.leEcb-IM0mzxWWsw-mYH0rdIHiK_MZ2WDbTl2-SN7Tk'
  }
  
  constructor(private http: HttpClient) { }

  actualProperty = this.baseMoviesList.asObservable();

  changeList(newValue: any) {
    this.baseMoviesList.next(newValue);
  }

  searchMovie(title: string):Observable<any> {
    return this.http.get(this.urlBase, 
    {
      headers : this.headers,
      params: {query: title}
    }).pipe(map((resp: any) => resp.results))
  }

  searchMovieById(movieId: number): Observable<any>  {
    return this.http.get(this.urlById + + movieId, {
      headers: this.headers
    }).pipe(map((resp: any) => resp))
  }

  
}
