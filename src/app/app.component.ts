// app.component.ts

import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuCtrl: MenuController, private router: Router, private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Escuchar los cambios de ruta
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          // Deshabilita el menú en 'home' y 'registro'
          if (event.url === '/home' || event.url === '/register') {
            this.menuCtrl.enable(false, 'first');
          } else {
            this.menuCtrl.enable(true, 'first');
          }
        }
      });
    });
  }
}
