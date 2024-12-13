import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:9090/category'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  addCategory(categoryName: string, dateCreated: string): Observable<any> {
    const body = { categoryName, dateCreated };
    return this.http.post(`${this.apiUrl}/create`, body);
  }

  // Update Category (PUT)
  updateCategory(id: number, categoryName: string, dateCreated: string): Observable<any> {
    const body = { categoryName, dateCreated };
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, body);
  }

  // Delete Category (DELETE)
  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }

  // Get All Categories (GET)
  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }
}
