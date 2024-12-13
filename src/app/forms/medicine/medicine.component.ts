import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../../services/medicine.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medicine',
  imports: [FormsModule,CommonModule],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent implements OnInit {
  medicines: any[] = [];
  medicineForm: any = {};
  editMode: boolean = false;
  editMedicineId: number | null = null;

  constructor(private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.loadMedicines();
  }

  // Load all medicines
  loadMedicines(): void {
    this.medicineService.getAllMedicines().subscribe(
      (response) => {
        this.medicines = response;
      },
      (error) => {
        console.error('Error loading medicines', error);
      }
    );
  }

  // Add medicine
  addMedicine(): void {
    this.medicineService.addMedicine(this.medicineForm).subscribe(
      (response) => {
        alert('Medicine added successfully!');
        this.loadMedicines();  // Reload the medicine list
        this.resetForm();
      },
      (error) => {
        alert('Error adding medicine!');
        console.error('Error adding medicine', error);
      }
    );
  }

  // Edit medicine (enable form with existing data)
  editMedicine(medicine: any): void {
    this.editMode = true;
    this.editMedicineId = medicine.id;
    this.medicineForm = { ...medicine }; // Prefill form with existing data
  }

  // Update medicine
  updateMedicine(): void {
    if (this.editMedicineId !== null) {
      this.medicineService.editMedicine(this.editMedicineId, this.medicineForm).subscribe(
        (response) => {
          alert('Medicine updated successfully!');
          this.loadMedicines();  // Reload the medicine list
          this.resetForm();
        },
        (error) => {
          alert('Error updating medicine!');
          console.error('Error updating medicine', error);
        }
      );
    }
  }

  // Delete medicine
  deleteMedicine(id: number): void {
    if (confirm('Are you sure you want to delete this medicine?')) {
      this.medicineService.deleteMedicine(id).subscribe(
        (response) => {
          alert('Medicine deleted successfully!');
          this.loadMedicines();  // Reload the medicine list
        },
        (error) => {
          alert('Error deleting medicine!');
          console.error('Error deleting medicine', error);
        }
      );
    }
  }

  // Reset the form
  resetForm(): void {
    this.medicineForm = {};
    this.editMode = false;
    this.editMedicineId = null;
  }

}