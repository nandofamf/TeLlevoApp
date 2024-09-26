import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { IonicModule } from '@ionic/angular';

import { PasajeroPageRoutingModule } from './pasajero-routing.module';
import { PasajeroPage } from './pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Asegúrate de incluir FormsModule
    IonicModule,
    PasajeroPageRoutingModule
  ],
  declarations: [PasajeroPage]
})
export class PasajeroPageModule {}
