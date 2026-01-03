import { computed, Injectable, signal } from '@angular/core';
import Product from '../product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly cartItems = signal<Product[]>([]);
  readonly priceBeforeConversion = computed(() =>
    this.cartItems().reduce((acc, item) => acc + item.price, 0),
  );

  addToCart(product: Product) {
    this.cartItems.update(items => [...items, product]);
  }

  removeFromCart(product: Product) {
    this.cartItems.update(items => items.filter(item => item.id !== product.id));
  }
}
