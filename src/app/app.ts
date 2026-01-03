import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoughtList } from './bought-list/bought-list';
import { CounterDisplayComponent } from './counter-display-component/counter-display-component';
import type Product from './product';
import { ProductComponent } from './product-component/product-component';
import { CurrencyConverter } from './currency-converter/currency-converter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterDisplayComponent, ProductComponent, BoughtList, CurrencyConverter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('CIao Alessandro');
  protected counter = 0;
  protected productBought = signal(0);
  protected boughtItems = signal<Product[]>([]);
  protected convertedPrice = signal<number>(0);
  protected priceBeforeConversion = computed(() =>
    this.boughtItems().reduce((acc, item) => acc + item.price, 0),
  );

  protected listItems: Product[] = [
    { id: 1, name: 'Apple', price: 199 },
    { id: 2, name: 'Banana', price: 99 },
    { id: 3, name: 'Orange', price: 149 },
  ];

  constructor() {
    effect(() => {
      console.log('Prezzo Cambiato', this.convertedPrice());
    });
  }

  onClickPlus() {
    this.counter++;
  }

  onClickMinus() {
    this.counter--;
  }

  handleUpdateCount() {
    this.counter = 0;
  }

  handleBuyProduct(product: { price: number; name: string }) {
    this.productBought.update((value) => value + 1);
    // this.totalPrice += product.price;
    this.boughtItems.update((items) => [
      ...items,
      {
        id: items.length + 1,
        name: product.name,
        price: product.price,
      },
    ]);
  }

  onPriceChange(newPrice: number) {
    this.convertedPrice.set(newPrice);
  }
}
