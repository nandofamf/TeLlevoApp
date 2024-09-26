// src/app/pages/home/home.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router de Angular

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  usr = {
    phoneNumber: '' 
  };

  constructor(private router: Router) {}

  onPhoneSubmit() {
    console.log('Ingresando con el número telefónico:', this.usr.phoneNumber);
    if (this.usr.phoneNumber && this.usr.phoneNumber.length === 8) {
      this.router.navigate(['/role-selection']); // Utiliza el Router de Angular para navegar
    }
  }
}