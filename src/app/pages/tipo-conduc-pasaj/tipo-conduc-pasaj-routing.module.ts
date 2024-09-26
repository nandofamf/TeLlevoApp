import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoConducPasajPage } from './tipo-conduc-pasaj.page';

const routes: Routes = [
  {
    path: '',
    component: TipoConducPasajPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoConducPasajPageRoutingModule {}
