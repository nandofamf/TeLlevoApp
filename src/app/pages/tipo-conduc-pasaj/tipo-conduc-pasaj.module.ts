import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoConducPasajPageRoutingModule } from './tipo-conduc-pasaj-routing.module';

import { TipoConducPasajPage } from './tipo-conduc-pasaj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoConducPasajPageRoutingModule
  ],
  declarations: [TipoConducPasajPage]
})
export class TipoConducPasajPageModule {}
