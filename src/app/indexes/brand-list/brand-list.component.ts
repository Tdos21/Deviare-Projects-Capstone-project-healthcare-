import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDashboardComponent } from '../../dashboards/admin-dashboard/admin-dashboard.component';
import { Observable } from 'rxjs';
import { Brand, BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand-list',
  imports: [FormsModule,CommonModule,AdminDashboardComponent],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.css'
})
export class BrandListComponent {
  brands: Brand[] = [];

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.loadBrands();
  }

  
  // Delete brand
  deleteBrand(id: number): void {
    if (confirm('Are you sure you want to delete this brand?')) {
      this.brandService.deleteBrand(id).subscribe(
        (response) => {
          alert('Brand deleted successfully!');
          this.loadBrands(); // Reload the list of brands after deletion
        },
        (error) => {
          console.error('Error deleting brand:', error);
          alert('Error deleting brand!');
        }
      );
    }
  }

  // Load all brands
  loadBrands(): void {
    this.brandService.getAllBrands().subscribe(
      (data) => {
        this.brands = data;  // Store the list of brands
      },
      (error) => {
        console.error('Error fetching brands:', error);
        alert('Error loading brands!');
      }
    );
  }
}
