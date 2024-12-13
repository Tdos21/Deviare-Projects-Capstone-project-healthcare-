import { Component } from '@angular/core';
import { AdminDashboardComponent } from '../../dashboards/admin-dashboard/admin-dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  imports: [FormsModule,CommonModule,AdminDashboardComponent],
  templateUrl: './adminpage.component.html',
  styleUrl: './adminpage.component.css'
})
export class AdminpageComponent {

}
