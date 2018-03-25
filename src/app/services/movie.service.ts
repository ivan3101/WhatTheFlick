import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Movies} from '../Models/movies.model';

@Injectable()
export class MovieService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/movies';
  }
  getAllMovies(): Observable<Movies[]> {
    return this.httpClient.get<Movies[]>(this.baseUrl);
  }
  getMovieById(id): Observable<Movies[]> {
    return this.httpClient.get<Movies[]>(this.baseUrl + `/${id}`);
  }
  getMovieByCategory(category: string): Observable<Movies[]> {
    return this.httpClient.get<Movies[]>(`${this.baseUrl}/category/${category}`);
  }
}
