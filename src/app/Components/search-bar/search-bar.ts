import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule], // 👈 FONDAMENTALE per usare [formControl]
  templateUrl: './search-bar.html',
  styles: [
    `
      input {
        width: 100%;
        padding: 10px;
        border: 2px solid #ccc;
        border-radius: 5px;
      }
    `,
  ],
})
export class SearchBar {
  // 1. Creiamo un "Controllo" per l'input
  searchControl = new FormControl('');

  // 2. Output
  searchEvent = output<string>();

  constructor() {
    // 3. Ci "iscriviamo" al flusso di eventi del form control
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // Aspetta 300ms
        distinctUntilChanged(), // Evita duplicati
        takeUntilDestroyed(), // Si disiscrive automaticamente quando il componente viene distrutto
      )
      .subscribe((value) => {
        // 4. Emettiamo il valore pulito al padre
        // (Il doppio ?? serve a garantire che sia stringa e non null)
        this.searchEvent.emit(value ?? '');

        console.log('Valore emesso dopo debounce:', value); // Per debug
      });
  }
}
