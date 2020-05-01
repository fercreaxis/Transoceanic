import { MatDialog } from '@angular/material/dialog';
import { AuxiliarService } from './../../../../lib/auxiliar.service';
import { EstadoReclamo } from './../../../../_models/estadoReclamos.model';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ramo-estados-reclamos',
  templateUrl: './ramo-estados-reclamos.component.html',
  styleUrls: ['./ramo-estados-reclamos.component.css']
})
export class RamoEstadosReclamosComponent implements OnInit {
  @Input() idRamo: number;
  estados: EstadoReclamo[];

 constructor(public auxiliar: AuxiliarService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getEstadoReclamos();
  }

  getEstadoReclamos() {
    const param = new EstadoReclamo();
    param.id_ramo = this.idRamo;

    this.auxiliar.getEstadosReclamos(param)
    .subscribe(data => {
      this.estados = data;
    }, error => {
      this.auxiliar.msgErrorDB('Error al cargar estados de reclamos', error);
    });
  }

  nuevoEstado() {

  }

  editEstado(estado: EstadoReclamo) {
  }

  subirOrden(estadoReclamo: EstadoReclamo) {
    this.auxiliar.subirOrdenEstado(estadoReclamo).subscribe(data => {
      this.getEstadoReclamos();
    }, error => {
      this.auxiliar.msgErrorDB('Error al subir orden', error);
    });
  }

  bajarOrden(estadoReclamo: EstadoReclamo) {
    this.auxiliar.bajarOrdenEstado(estadoReclamo).subscribe(data => {
      this.getEstadoReclamos();
    }, error => {
      this.auxiliar.msgErrorDB('Error al bajar orden', error);
    });
  }


}
