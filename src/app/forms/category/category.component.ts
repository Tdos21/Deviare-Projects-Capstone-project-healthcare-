import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  imports: [FormsModule, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categories: any[] = [];
  categoryName: string = '';
  dateCreated: string = '';
  selectedCategoryId: number | null = null;

  constructor(private categoryService: CategoryService) {}

  onAddCategory() {
    this.categoryService.addCategory(this.categoryName, this.dateCreated)
      .subscribe(
        (response) => {
          console.log('Category saved successfully:', response);
        },
        (error) => {
          console.error('Error saving category:', error);
        }
      );
  }





  ngOnInit(): void {
    this.getAllCategories();
  }

  // Fetch all categories
  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  // Update category
  onUpdateCategory(): void {
    if (this.selectedCategoryId) {
      this.categoryService.updateCategory(this.selectedCategoryId, this.categoryName, this.dateCreated)
        .subscribe(
          (response) => {
            console.log('Category updated successfully:', response);
            this.getAllCategories();  // Refresh the category list
          },
          (error) => {
            console.error('Error updating category:', error);
          }
        );
    }
  }

  // Delete category
  onDeleteCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(
      (response) => {
        console.log(response);
        this.getAllCategories();  // Refresh the category list
      },
      (error) => {
        console.error('Error deleting category:', error);
      }
    );
  }
}
