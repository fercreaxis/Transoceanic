import { CalendarioComponent } from './calendario/calendario.component';
import { ContactoEditComponent } from './contactos/contacto-edit/contacto-edit.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CrmRoutes } from './crm.routing';
import { MaterialModule } from './../../app.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CrmRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ],
  declarations: [
      ContactosComponent,
      ContactoEditComponent,
      CalendarioComponent
],
  entryComponents: [
  ]
})

export class CrmModule {}
