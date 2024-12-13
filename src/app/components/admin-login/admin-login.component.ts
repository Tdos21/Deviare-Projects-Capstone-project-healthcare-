import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule,FormsModule, HttpClientModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  loginData = { adminName: '', password: '' }; // Model to store form data

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const apiUrl = 'http://localhost:8080/appuser/api/login'; // Replace with your API endpoint

    // Call the API directly
    this.http.post(apiUrl, this.loginData, { headers: headers }).subscribe(
      (response: any) => {
        // Check user role and navigate accordingly
        const userRole = response.user.role; // Assume API returns user role
        if (userRole === 1) {
          this.router.navigate(['/app-clientdash']); // Navigate to client dashboard
        } else {
          this.router.navigate(['/app-admindash']); // Navigate to admin dashboard
        }
      },
      (error) => {
        // Handle login error
        console.error('Login failed:', error);
      }
    );
  }
}
