import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private baseUrl = 'http://localhost:9090/delivery'; // Your backend API URL

  constructor(private http: HttpClient) {}

  addDelivery(delivery: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, delivery, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  editDelivery(id: number, delivery: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/edit/${id}`, delivery, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  deleteDelivery(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  // Method to fetch all deliveries
  getAllDeliveries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
}
