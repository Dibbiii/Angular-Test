import { Component, inject } from '@angular/core';
import { CartService } from '../../Services/cart-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-out',
  imports: [ReactiveFormsModule],
  templateUrl: './check-out.html',
  styleUrl: './check-out.css',
})
export class CheckOut {
  cartService = inject(CartService);

  orderForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  onSubmit() {
    if (this.orderForm.valid) {
      alert('Grazie ' + this.orderForm.value.name + " per l'ordine effettuato!");
      this.cartService.clearCart();
    }
  }
}
