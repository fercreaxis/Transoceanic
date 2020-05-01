import { VendedorEditComponent } from './vendedores/vendedor-edit/vendedor-edit.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { PolizaColectivaEditComponent } from './polizas/poliza-colectiva-edit/poliza-colectiva-edit.component';
import { PolizaEditComponent } from './polizas/poliza-edit/poliza-edit.component';
import { PolizasComponent } from './polizas/polizas.component';
import { RamoEditComponent } from './ramos/ramo-edit/ramo-edit.component';

import { AseguradoraEditComponent } from './aseguradoras/aseguradora-edit/aseguradora-edit.component';
import { RamosComponent } from './ramos/ramos.component';
import { AseguradorasComponent } from './aseguradoras/aseguradoras.component';
import { AuthGuard } from './../../lib/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const AdmRoutes: Routes = [
  {
    path: 'aseguradoras',
    children: [
      {
        path: '',
        component: AseguradorasComponent,
      },
      {
        path: 'aseguradora/:Id',
        component: AseguradoraEditComponent,
      },
    ],
  },
  {
    path: 'ramos',
    children: [
      {
        path: '',
        component: RamosComponent,
      },
      {
        path: 'ramo/:Id',
        component: RamoEditComponent,
      },
    ],
  },
  {
    path: 'polizas',
    children: [
      {
        path: '',
        component: PolizasComponent,
      },
      {
        path: 'poliza/:Id',
        component: PolizaEditComponent,
      },
      {
        path: 'polizacol/:Id',
        component: PolizaColectivaEditComponent,
      },
    ],
  },
  {
    path: 'vendedores',
    children: [
      {
        path: '',
        component: VendedoresComponent,
      },
      {
        path: 'vendedor/:Id',
        component: VendedorEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(AdmRoutes)],
  exports: [RouterModule],
})
export class AdmRoutingModule {}
