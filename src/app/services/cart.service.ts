import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CartItem {
  name: string;
  description: string;
  quantity: number;
  price: number;
  total: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:9090/cart'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  // Fetch the cart items from the backend
  getCartItems(): Observable<any[]> {
    return this.http.get<[any]>(`${this.apiUrl}/add`);
  }

}
