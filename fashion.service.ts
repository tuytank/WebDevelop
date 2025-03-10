import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fashion } from './models/fashion.model';
@Injectable({
  providedIn: 'root'
})
export class FashionService {
  private apiUrl = 'http://localhost:4000/api/fashion';

  constructor(private http: HttpClient) {}

  getFashions(): Observable<Fashion[]> {
    return this.http.get<Fashion[]>(this.apiUrl);
  }

  getFashionById(id: string): Observable<Fashion> {
    return this.http.get<Fashion>(`${this.apiUrl}/${id}`);
  }

  addFashion(fashion: Fashion): Observable<Fashion> {
    return this.http.post<Fashion>(this.apiUrl, fashion);
  }

  updateFashion(id: string, fashion: Fashion): Observable<Fashion> {
    return this.http.put<Fashion>(`${this.apiUrl}/${id}`, fashion);
  }

  deleteFashion(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
