import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDashboardComponent } from '../../dashboards/admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-invoice-list',
  imports: [FormsModule,CommonModule, AdminDashboardComponent],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent {

  invoices: any[] = [];
}
