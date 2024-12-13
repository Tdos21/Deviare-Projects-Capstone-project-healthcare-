import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDashboardComponent } from '../../dashboards/admin-dashboard/admin-dashboard.component';
import { Order, OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list',
  imports: [HttpClientModule, FormsModule, CommonModule, AdminDashboardComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  // Fetch all orders
  getAllOrders(): void {
    this.orderService.getAllOrders().subscribe(
      (orders: Order[]) => {
        this.orders = orders;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  // Add order
  addOrder(order: Order): void {
    this.orderService.addOrder(order).subscribe(
      (response) => {
        console.log('Order added:', response);
        this.getAllOrders(); // Refresh the list after adding
      },
      (error) => {
        console.error('Error adding order:', error);
      }
    );
  }

  // Edit order
  editOrder(id: number, updatedOrder: Order): void {
    this.orderService.editOrder(id, updatedOrder).subscribe(
      (response) => {
        console.log('Order updated:', response);
        this.getAllOrders(); // Refresh the list after editing
      },
      (error) => {
        console.error('Error editing order:', error);
      }
    );
  }

  // Delete order
  deleteOrder(id: number): void {
    this.orderService.deleteOrder(id).subscribe(
      (response) => {
        console.log('Order deleted:', response);
        this.getAllOrders(); // Refresh the list after deletion
      },
      (error) => {
        console.error('Error deleting order:', error);
      }
    );
  }
}