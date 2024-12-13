import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,FormsModule, HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  custEmail: string = '';
  custPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.custEmail, this.custPassword).subscribe({
      next: (user) => {
        // Redirect to the dashboard
        this.router.navigate(['/clientdash']); // Ensure '/dashboard' is a valid Angular route
      },
      error: (err) => {
        // Handle login failure
        this.errorMessage = 'Invalid email or password';
      }
    });
  }
}
