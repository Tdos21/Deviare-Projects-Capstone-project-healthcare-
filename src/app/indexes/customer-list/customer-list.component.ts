import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDashboardComponent } from '../../dashboards/admin-dashboard/admin-dashboard.component';
import { Customers, UserService } from '../../services/user.service';

@Component({
  selector: 'app-customer-list',
  // standalone :true,
  imports: [HttpClientModule,FormsModule,CommonModule, AdminDashboardComponent, ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  customers: Customers[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => (this.customers = data));
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => (this.customers = data));
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        alert('User deleted successfully');
        this.loadUsers(); // Reload users after deletion
      },
      error: (err) => {
        console.error('Error deleting user:', err);
        alert('Error deleting user');
      },
    });
  }
}

