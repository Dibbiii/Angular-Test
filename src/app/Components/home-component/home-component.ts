import { Component, computed, effect, inject, signal } from '@angular/core';
import { CartService } from '../../Services/cart-service';
import { CounterDisplayComponent } from '../../Components/counter-display-component/counter-display-component';
import type Product from '../../product';
import { ProductComponent } from '../../Components/product-component/product-component';
import { CurrencyConverter } from '../../Components/currency-converter/currency-converter';
import { SearchBar } from '../../Components/search-bar/search-bar';
import { BoughtList } from '../bought-list/bought-list';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [BoughtList, CounterDisplayComponent, ProductComponent, CurrencyConverter, SearchBar],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  protected counter = 0;
  protected convertedPrice = signal<number>(0);

  cartService = inject(CartService);

  protected listItems = signal<Product[]>([
    { id: 1, name: 'Apple', price: 199 },
    { id: 2, name: 'Banana', price: 99 },
    { id: 3, name: 'Orange', price: 149 },
  ]);

  // Signal per il testo di ricerca
  protected searchText = signal('');

  // Lista visualizzata dall'utente -> si aggiorna o se cambia searchText o se cambia listItems
  protected filteredProducts = computed(() => {
    const text = this.searchText().toLowerCase();
    const products = this.listItems();

    if (!text) return products; // Se vuoto, mostra tutto

    return products.filter((p) => p.name.toLowerCase().includes(text));
  });

  // Metodo chiamato dall'evento della SearchBar
  onSearchUpdated(text: string) {
    this.searchText.set(text);
  }

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

  onPriceChange(newPrice: number) {
    this.convertedPrice.set(newPrice);
  }
}
