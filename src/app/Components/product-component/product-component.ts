import { Component, inject, input, output } from '@angular/core';
import { CartService } from '../../Services/cart-service';

@Component({
  selector: 'app-product-component',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent {
  name = input.required<string>();
  price = input.required<number>();
  id = input.required<number>();
  cartService = inject(CartService);

  buyProduct = output<{ price: number; name: string }>();

  handleBuyProduct() {
    this.cartService.addToCart({
      id: this.id(),
      name: this.name(),
      price: this.price(),
    });
    
  }
}
