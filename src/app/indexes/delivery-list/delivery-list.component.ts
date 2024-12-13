import { Component } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-delivery-list',
  imports: [],
  templateUrl: './delivery-list.component.html',
  styleUrl: './delivery-list.component.css'
})
export class DeliveryListComponent {
  deliveries: any[] = [];  // Array to hold all deliveries

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.loadDeliveries();  // Load deliveries when component initializes
  }

  // Method to load all deliveries from the backend
  loadDeliveries(): void {
    this.deliveryService.getAllDeliveries().subscribe(
      (response) => {
        this.deliveries = response;
        console.log('Deliveries loaded:', this.deliveries);
      },
      (error) => {
        console.error('Error loading deliveries:', error);
      }
    );
  }
}