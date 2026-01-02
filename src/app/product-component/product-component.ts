import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-component',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent {
  name = input.required<string>();
  price = input.required<number>();

  buyProduct = output<{ price: number; name: string }>();

  handleBuyProduct() {
    this.buyProduct.emit({
      price: this.price(),
      name: this.name(),
    });
  }
}
