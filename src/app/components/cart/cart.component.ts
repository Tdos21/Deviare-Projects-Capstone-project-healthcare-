import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 // Import the CartService

interface CartItem {
  name: string;
  description: string;
  quantity: number;
  price: number;
  total: number;
  imageUrl: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [FormsModule,CommonModule],
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Fetch cart items from the backend when the component is initialized
    this.cartService.getCartItems().subscribe(
      (items: CartItem[]) => {
        this.cartItems = items;
        this.calculateTotal();  // Calculate the total after loading the cart items
      },
      error => {
        console.error('Error fetching cart items', error);
      }
    );
  }

  // Update cart total and item total
  updateItemTotal(item: CartItem): void {
    item.total = item.quantity * item.price;
    this.calculateTotal();
  }

  // Calculate the overall cart total
  calculateTotal(): void {
    this.cartTotal = this.cartItems.reduce((total, item) => total + item.total, 0);
  }

  // Remove an item from the cart
  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.calculateTotal();
  }

  // Adjust the quantity of a cart item
  changeQuantity(item: CartItem, change: number): void {
    item.quantity += change;
    if (item.quantity < 1) item.quantity = 1; // Prevent negative quantities
    this.updateItemTotal(item);
  }
}
