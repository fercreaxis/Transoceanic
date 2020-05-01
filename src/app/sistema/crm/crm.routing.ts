import { CalendarioComponent } from './calendario/calendario.component';
import { ContactoEditComponent } from './contactos/contacto-edit/contacto-edit.component';
import { ContactosComponent } from './contactos/contactos.component';
import { AuthGuard } from './../../lib/auth.guard';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const CrmRoutes: Routes = [
  {
    path: 'contactos',
    children: [
      {
        path: '',
        component: ContactosComponent,
      },
      {
        path: 'contacto/:Id',
        component: ContactoEditComponent,
      },
    ],
  },
  {
    path: 'calendario',
    children: [
      {
        path: '',
        component: CalendarioComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(CrmRoutes)],
  exports: [RouterModule],
})
export class CrmRoutingModule {}
