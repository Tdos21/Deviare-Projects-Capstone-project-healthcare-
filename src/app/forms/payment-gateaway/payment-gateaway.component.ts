import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment-gateaway',
  imports: [],
  templateUrl: './payment-gateaway.component.html',
  styleUrl: './payment-gateaway.component.css'
})
export class PaymentGateawayComponent {
  payment = {
    totalPaySuccess: 0,
    pay_Date: '',
    payStatus: '',
    customer: null,
    orders: null
  };
  
  constructor(private paymentService: PaymentService) {}

  addPayment() {
    this.paymentService.addPayment(this.payment).subscribe(
      (response) => {
        console.log('Payment added successfully:', response);
      },
      (error) => {
        console.error('Error adding payment:', error);
      }
    );
  }

  deletePayment(paymentId: number) {
    this.paymentService.deletePayment(paymentId).subscribe(
      (response) => {
        console.log('Payment deleted successfully:', response);
      },
      (error) => {
        console.error('Error deleting payment:', error);
      }
    );
  }
}
