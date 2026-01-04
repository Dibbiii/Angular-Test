import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BoughtList } from './Components/bought-list/bought-list';
import { CounterDisplayComponent } from './Components/counter-display-component/counter-display-component';
import type Product from './product';
import { ProductComponent } from './Components/product-component/product-component';
import { CurrencyConverter } from './Components/currency-converter/currency-converter';
import { SearchBar } from './Components/search-bar/search-bar';
import { CartService } from './Services/cart-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CounterDisplayComponent,
    ProductComponent,
    BoughtList,
    CurrencyConverter,
    SearchBar,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Ciao Alessandra!');
}
