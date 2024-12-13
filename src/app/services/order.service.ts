import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 // Create a model for your orders

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:9090/order'; // Your backend base URL

  constructor(private http: HttpClient) {}

  // Add Order
  addOrder(order: Order): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, order);
  }

  // Get All Orders
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/getAll`);
  }

  // Edit Order
  editOrder(id: number, order: Order): Observable<any> {
    return this.http.put(`${this.baseUrl}/edit/${id}`, order);
  }

  // Delete Order
  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}

export class Order {
  id?: number;
  orderTotal: number;
  order_Date!: Date;
  itemsQuantity: number;
  customer: any; // Define this model if needed
  items: any[]; // Define this model if needed

  constructor(
    orderTotal: number,
    payDate: Date,
    itemsQuantity: number,
    customer: any,
    items: any[]
  ) {
    this.orderTotal = orderTotal;
    this.order_Date = payDate;
    this.itemsQuantity = itemsQuantity;
    this.customer = customer;
    this.items = items;
  }
}