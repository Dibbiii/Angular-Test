import { computed, Injectable, signal } from '@angular/core';
import Product from '../product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItems = signal<Product[]>([]);
  readonly cartItems = this._cartItems.asReadonly();
  readonly priceBeforeConversion = computed(() =>
    
    this.cartItems().reduce((acc, item) => acc + item.price, 0),
  );

  addToCart(product: Product) {
    this._cartItems.update(items => [...items, product]);
  }

  removeFromCart(product: Product) {
    this._cartItems.update(items => items.filter((item) => item.id !== product.id));
  }
}
