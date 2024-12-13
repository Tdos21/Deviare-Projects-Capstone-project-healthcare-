import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-deliveries',
  imports: [],
  templateUrl: './deliveries.component.html',
  styleUrl: './deliveries.component.css'
})
export class DeliveriesComponent implements OnInit {
  deliveries: any[] = [];
  selectedDelivery: any = { delAddress: '', delDate: '', customer: '', orders: '' };

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.loadDeliveries();
  }

  loadDeliveries(): void {
    // Add logic to load deliveries if necessary
  }

  addDelivery(): void {
    this.deliveryService.addDelivery(this.selectedDelivery).subscribe(
      (response) => {
        console.log('Delivery added', response);
        this.loadDeliveries();  // Reload deliveries after adding
      },
      (error) => {
        console.error('Error adding delivery', error);
      }
    );
  }

  editDelivery(id: number): void {
    this.deliveryService.editDelivery(id, this.selectedDelivery).subscribe(
      (response) => {
        console.log('Delivery edited', response);
        this.loadDeliveries();  // Reload deliveries after editing
      },
      (error) => {
        console.error('Error editing delivery', error);
      }
    );
  }

  deleteDelivery(id: number): void {
    this.deliveryService.deleteDelivery(id).subscribe(
      (response) => {
        console.log('Delivery deleted', response);
        this.loadDeliveries();  // Reload deliveries after deletion
      },
      (error) => {
        console.error('Error deleting delivery', error);
      }
    );
  }
}