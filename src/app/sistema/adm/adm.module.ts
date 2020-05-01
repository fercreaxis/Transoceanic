import { PedirTextoComponent } from './../shared/pedir-texto/pedir-texto.component';
import { OpcionesComponent } from './../shared/opciones/opciones.component';
import { ContactosInlineComponent } from './../crm/contactos/contactos-inline/contactos-inline.component';
import { AdmRoutes } from './adm.routing';
import { MaterialModule } from './../../app.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { AseguradorasComponent } from './aseguradoras/aseguradoras.component';
import { AseguradoraEditComponent } from './aseguradoras/aseguradora-edit/aseguradora-edit.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { VendedorEditComponent } from './vendedores/vendedor-edit/vendedor-edit.component';
import { RamosComponent } from './ramos/ramos.component';
import { PolizasComponent } from './polizas/polizas.component';
import { PolizaEditComponent } from './polizas/poliza-edit/poliza-edit.component';
import { PolizaColectivaEditComponent } from './polizas/poliza-colectiva-edit/poliza-colectiva-edit.component';
import { RamoEditComponent } from './ramos/ramo-edit/ramo-edit.component';
import { RamoVariablesComponent } from './ramos/ramo-variables/ramo-variables.component';
import { RamoCoberturasComponent } from './ramos/ramo-coberturas/ramo-coberturas.component';
import { ProductosComponent } from './aseguradoras/productos/productos.component';
import { ProductoEditComponent } from './aseguradoras/productos/producto-edit/producto-edit.component';
import { ProductoCoberturasComponent } from './aseguradoras/productos/producto-coberturas/producto-coberturas.component';
import { ProductoPlanesComponent } from './aseguradoras/productos/producto-planes/producto-planes.component';
import { ProductoCoberturaEditComponent } from './aseguradoras/productos/producto-coberturas/producto-cobertura-edit/producto-cobertura-edit.component';
import { RamoVariablesReclamosComponent } from './ramos/ramo-variables-reclamos/ramo-variables-reclamos.component';
import { RamoEstadosReclamosComponent } from './ramos/ramo-estados-reclamos/ramo-estados-reclamos.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdmRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ],
  declarations: [
  AseguradorasComponent,
  AseguradoraEditComponent,
  VendedoresComponent,
  VendedorEditComponent,
  RamosComponent,
  PolizasComponent,
  PolizaEditComponent,
  PolizaColectivaEditComponent,
  RamoEditComponent,
  RamoVariablesComponent,
  RamoCoberturasComponent,
  ContactosInlineComponent,
  ProductosComponent,
  ProductoEditComponent,
  ProductoCoberturasComponent,
  ProductoPlanesComponent,
  ProductoCoberturaEditComponent,
  RamoVariablesReclamosComponent,
  RamoEstadosReclamosComponent],
  entryComponents: [
    OpcionesComponent,
    PedirTextoComponent,
    VendedorEditComponent,
    ProductoCoberturaEditComponent
  ]
})

export class AdmModule {}
