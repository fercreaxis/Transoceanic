import { CoberturaProductoColumn } from './../../../../../../_models/coberturaProductoColumn.model';
import { AuxiliarService } from './../../../../../../lib/auxiliar.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-producto-cobertura-edit',
  templateUrl: './producto-cobertura-edit.component.html',
  styleUrls: ['./producto-cobertura-edit.component.css'],
})
export class ProductoCoberturaEditComponent implements OnInit {
  idDetalle = 0;
  detalle = '';

  constructor(
    public auxiliar: AuxiliarService,
    public matDialogRef: MatDialogRef<ProductoCoberturaEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.detalle = data.detalle;
    this.idDetalle = data.idDetalle;

    console.log('param data', data);
  }

  ngOnInit(): void {}

  guardarDetalle() {
    const param = new CoberturaProductoColumn;

    param.idDetalle = this.idDetalle;
    param.detalle = this.detalle;

    this.auxiliar.setDetalleCoberturaProductoDtl(param)
    .subscribe(results => {
      this.matDialogRef.close(1);
    }, error => {
      this.auxiliar.msgErrorDB('Error al guardar detalle', error);
    });
  }

  cancelar() {
    this.matDialogRef.close(0);
  }
}
