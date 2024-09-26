// role-selection.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importación necesaria
import { IonicModule } from '@ionic/angular';

import { RoleSelectionPageRoutingModule } from './role-selection-routing.module';
import { RoleSelectionPage } from './role-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Asegúrate de incluir FormsModule
    IonicModule,
    RoleSelectionPageRoutingModule
  ],
  declarations: [RoleSelectionPage]
})
export class RoleSelectionPageModule {}
