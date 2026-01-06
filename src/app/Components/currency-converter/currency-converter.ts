import { Component, computed, signal, input, inject, ChangeDetectionStrategy } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CartService } from '../../Services/cart-service';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DecimalPipe],
  templateUrl: './currency-converter.html',
  styleUrl: './currency-converter.css',
})
export class CurrencyConverter {
  cartService = inject(CartService);
  initialPrice = this.cartService.priceBeforeConversion;

  selectedCurrency = signal('EUR');

  // Tassi fissi rispetto alla base (EUR)
  private rates: Record<string, number> = {
    EUR: 1,
    USD: 1.18,
    GBP: 0.85,
    MXN: 20.5, // Pesos
  };

  currencies = Object.keys(this.rates);

  // Se cambia initialPrice (dal padre) -> ricalcola.
  // Se cambia selectedCurrency (dal click) -> ricalcola.
  finalPrice = computed(() => {
    const rate = this.rates[this.selectedCurrency()];
    return this.initialPrice() * rate;
  });
}
