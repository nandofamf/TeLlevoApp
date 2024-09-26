import { Component } from '@angular/core';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage {
  partida: string = '';
  destino: string = '';
  horaSalida: string = '';
  capacidadTotal: number = 0; 
  costoPorPersona: number = 0; 

  constructor() {}

  programarViaje() {

    console.log('Viaje programado:', {
      partida: this.partida,
      destino: this.destino,
      horaSalida: this.horaSalida,
      capacidadTotal: this.capacidadTotal,
      costoPorPersona: this.costoPorPersona
    });
  }
}
