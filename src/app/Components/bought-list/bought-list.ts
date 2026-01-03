import { Component, inject, input } from '@angular/core';
import type Product from '../../product';
import { CartService } from '../../Services/cart-service';

@Component({
  selector: 'app-bought-list',
  imports: [],
  standalone: true,
  templateUrl: './bought-list.html',
  styleUrl: './bought-list.css',
})
export class BoughtList {
  cartService = inject(CartService);
  boughtItems = this.cartService.cartItems;
}
