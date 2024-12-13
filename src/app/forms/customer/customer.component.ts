import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  user = {
    custFullName: '',
    custAge: '',
    custAddress: '',
    custEmail: '',
    custPhone: '',
    custPassword: '',
  };

  message = '';

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addUser() {
    this.userService.addUser(this.user).subscribe({
      next: (response) => {
        this.message = response.message;
      },
      error: (err) => {
        this.message = 'Error: ' + err.error.message;
      },
    });
  }
}
