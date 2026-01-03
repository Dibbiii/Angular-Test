import { Component, input } from '@angular/core';
import type Product from '../product';

@Component({
  selector: 'app-bought-list',
  imports: [],
  standalone: true,
  templateUrl: './bought-list.html',
  styleUrl: './bought-list.css',
})
export class BoughtList {
  BoughtItems = input.required<Product[]>();
}
