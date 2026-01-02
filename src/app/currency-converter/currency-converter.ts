import { Component, computed, signal, input, output } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [],
  templateUrl: './currency-converter.html',
  styleUrl: './currency-converter.css',
})
export class CurrencyConverter {
  exchangeRate = signal(1);
  actualCurrency = signal('Euro');

  initialPrice = input.required<number>();

  finalPrice = computed(() => this.exchangeRate() * this.initialPrice());
  priceChange = output<number>();

  onEuroClicked() {
    if (this.actualCurrency() === 'Dollaro') {
      this.exchangeRate.set(0.85);
    }
    if (this.actualCurrency() === 'Sterlina') {
      this.exchangeRate.set(1.15);
    }
    if (this.actualCurrency() === 'Pesos') {
      this.exchangeRate.set(0.048);
    }
    this.actualCurrency.set('Euro');
    this.priceChange.emit(this.finalPrice());
  }

  onDollaroClicked() {
    if (this.actualCurrency() === 'Euro') {
      this.exchangeRate.set(1.18);
    }
    if (this.actualCurrency() === 'Sterlina') {
      this.exchangeRate.set(1.35);
    }
    if (this.actualCurrency() === 'Pesos') {
      this.exchangeRate.set(0.056);
    }
    this.actualCurrency.set('Dollaro');
    this.priceChange.emit(this.finalPrice());
  }

  onSterlinaClicked() {
    if (this.actualCurrency() === 'Euro') {
      this.exchangeRate.set(0.87);
    }
    if (this.actualCurrency() === 'Dollaro') {
      this.exchangeRate.set(0.74);
    }
    if (this.actualCurrency() === 'Pesos') {
      this.exchangeRate.set(0.042);
    }
    this.actualCurrency.set('Sterlina');
    this.priceChange.emit(this.finalPrice());
  }

  onPesosClicked() {
    if (this.actualCurrency() === 'Euro') {
      this.exchangeRate.set(20.83);
    }
    if (this.actualCurrency() === 'Dollaro') {
      this.exchangeRate.set(17.86);
    }
    if (this.actualCurrency() === 'Sterlina') {
      this.exchangeRate.set(23.81);
    }
    this.actualCurrency.set('Pesos');
    this.priceChange.emit(this.finalPrice());
  }
}
