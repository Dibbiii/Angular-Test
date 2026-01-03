import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home-component/home-component';
import { BoughtList } from './Components/bought-list/bought-list';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: BoughtList,
    title: 'Carrello'
  }
];
