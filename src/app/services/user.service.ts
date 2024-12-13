import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Response {
  statusCode: number;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:9090/customer'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, user);
  }

  getUsers(): Observable<Customers[]> {
    return this.http.get<Customers[]>(this.apiUrl);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}

export interface Customers {
  id: number;
  custFullName: string;
  custEmail: string;
  
  custAge:number;
  custAddress: string;
   
  custPhone: string;
  custPassword: string;

}
