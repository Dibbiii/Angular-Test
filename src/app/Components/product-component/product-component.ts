import { Component, inject, input, output } from '@angular/core';
import { CartService } from '../../Services/cart-service';

@Component({
  selector: 'app-product-component',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent {
  title = input.required<string>();
  price = input.required<number>();
  id = input.required<number>();
  image = input.required<string>();
  description = input.required<string | undefined>();
  cartService = inject(CartService);

  handleBuyProduct() {
    this.cartService.addToCart({
      id: this.id(),
      title: this.title(),
      price: this.price(),
      image: this.image(),
      description: this.description(),
    });
  }
}
