import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Series} from '../Models/series.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SerieService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/series';
  }
  getAllSeries(): Observable<Series[]> {
    return this.httpClient.get<Series[]>(this.baseUrl);
  }
  getSerieById(id): Observable<Series[]> {
    return this.httpClient.get<Series[]>(this.baseUrl + `/${id}`);
  }
  getSerieByCategory(category: string): Observable<Series[]> {
    return this.httpClient.get<Series[]>(`${this.baseUrl}/category/${category}`);
  }
}
