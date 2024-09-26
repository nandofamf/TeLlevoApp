

import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

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
      this.router.navigate(['/role-selection']); 
    }
  }
}