import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-counter-display-component',
  imports: [],
  standalone: true,
  templateUrl: './counter-display-component.html',
  styleUrl: './counter-display-component.css',
})
export class CounterDisplayComponent {
  count = input.required<number>();
}
