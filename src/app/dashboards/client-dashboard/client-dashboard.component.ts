import { Component } from '@angular/core';
import { TopnavComponent } from '../topnav/topnav.component';
import { CategoryFilterComponent } from '../category-filter/category-filter.component';
import { ProductDisplayComponent } from '../product-display/product-display.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  imports: [TopnavComponent,
    CategoryFilterComponent,
    ProductDisplayComponent,
  RouterModule
  ],
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css'
})
export class ClientDashboardComponent {

}
