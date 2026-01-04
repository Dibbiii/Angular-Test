import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home-component/home-component';
import { BoughtList } from './Components/bought-list/bought-list';
import { CheckOut } from './Components/check-out/check-out';

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
  },
  {
    path: 'check-out',
    component: CheckOut,
    title: 'Procedi all\'ordine'
  },
  { 
    path: '**', 
    redirectTo: '' // Se l'utente scrive un URL a caso, torna alla home
  } 
];
