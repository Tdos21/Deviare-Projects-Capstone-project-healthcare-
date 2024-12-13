import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDashboardComponent } from '../../dashboards/admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-product-list',
  imports: [HttpClientModule, FormsModule, CommonModule, AdminDashboardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];  // Array to hold task data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTasks();
  }

  // Method to fetch tasks from the API
  getTasks(): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const apiUrl = 'http://localhost:8080/meeting/api/getAllMeetings';  // Replace with your API endpoint

    this.http.get<any[]>(apiUrl, { headers }).subscribe(
      (data) => {
        this.products = data;
        console.log('Meeting fetched successfully', data);
      },
      (error) => {
        console.error('Error fetching meetings', error);
      }
    );
  }
}

