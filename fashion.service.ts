import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fashion } from './models/fashion.model';

@Injectable({
  providedIn: 'root'
})
export class FashionService {
  private apiUrl = 'http://localhost:4000/api/fashion'; // API của server

  constructor(private http: HttpClient) {}

  // Lấy toàn bộ danh sách Fashion
  getFashions(): Observable<Fashion[]> {
    return this.http.get<Fashion[]>(this.apiUrl);
  }

  // Lấy một Fashion theo ID
  getFashionById(id: string): Observable<Fashion> {
    return this.http.get<Fashion>(`${this.apiUrl}/${id}`);
  }
}

