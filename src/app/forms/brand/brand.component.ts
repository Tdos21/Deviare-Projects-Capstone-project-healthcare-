import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Brand, BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  imports: [FormsModule, CommonModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
  id:number = 0;
  brandName: string = '';
  dateCreated: string = '';

  constructor(private brandService: BrandService) {}

  // Method to add a brand
  addBrand(): void {
    const newBrand = new Brand(this.id,this.brandName, this.dateCreated);

    this.brandService.addBrand(newBrand).subscribe(
      (response) => {
        console.log('Brand added successfully!', response);
        alert('Brand added successfully!');
        // Optionally, navigate to another page or reset the form
      },
      (error) => {
        console.error('Error adding brand', error);
        alert('Error adding brand!');
      }
    );
  }
}