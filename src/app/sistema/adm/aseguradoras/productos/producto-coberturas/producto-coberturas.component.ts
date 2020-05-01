import { CoberturaProducto } from './../../../../../_models/coberturaProducto.model';
import { PedirTextoComponent } from './../../../../shared/pedir-texto/pedir-texto.component';
import { OpcionesComponent } from './../../../../shared/opciones/opciones.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ProductoCoberturaEditComponent } from './producto-cobertura-edit/producto-cobertura-edit.component';
import { CoberturaProductoColumn } from './../../../../../_models/coberturaProductoColumn.model';
import { CoberturaProductoRow } from './../../../../../_models/coberturaProductoRow.model';
import { MatDialog } from '@angular/material/dialog';
import { AuxiliarService } from './../../../../../lib/auxiliar.service';
import { Cobertura } from './../../../../../_models/cobertura.model';
import { Producto } from './../../../../../_models/producto.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto-coberturas',
  templateUrl: './producto-coberturas.component.html',
  styleUrls: ['./producto-coberturas.component.css']
})
export class ProductoCoberturasComponent implements OnInit {
  @Input() idProducto: number;

  constructor(public auxiliar: AuxiliarService,
    public dialog: MatDialog,
    public bottomSheet: MatBottomSheet) { }
  coberturas: Cobertura[];

  coberturasProductoRow: CoberturaProductoRow[];
  coberturasProductoColumn: CoberturaProductoColumn[];

  ngOnInit() {
    this.dibujarCoberturas();
  }

  editCobertura(cober: CoberturaProductoRow) {
  }

  openDialog(pCoberturaProducto: CoberturaProductoRow): void {
  }

  getHeaderColumn(num: number) {
    const headerColumns: CoberturaProductoColumn[] = [];
    for (const hc of this.coberturasProductoColumn) {
      if (hc.id_grupo === num) {
        headerColumns.push(hc);
      }
    }
    return headerColumns;
  }

  getCoberturasProductoRow() {
    const filtro = new Producto();
    filtro.ID = this.idProducto;

    this.auxiliar.getCoberturasProductoRow(filtro)
      .subscribe(result => {
        this.coberturasProductoRow = result;
      }, error => {
        this.auxiliar.msgErrorDB('Error al cargar filas', error);
      });
  }

  getCoberturasProductoColumn() {
    const filtro = new Producto();
    filtro.ID = this.idProducto;

    this.auxiliar.getCoberturasProductoColumn(filtro)
      .subscribe(result => {
        this.coberturasProductoColumn = result;
      }, error => {
        this.auxiliar.msgErrorDB('Error al cargar columnas', error);
      });
  }

  dibujarCoberturas() {
    this.getCoberturasProductoRow();
    this.getCoberturasProductoColumn();
  }


  accionesSeccion(p: CoberturaProductoRow) {
    const listadoOpciones = ['Cambiar Nombre Seccion', 'Adicionar Cobertura en Seccion'];

    const dialogRef = this.bottomSheet.open(OpcionesComponent, {
      data: {
        opciones: listadoOpciones
      }
    });

    dialogRef.afterDismissed()
    .subscribe(results => {
      const retorno: number = results;

      if (retorno === 1) {
        this.cambiarNombreSeccion(p);
      }
      if (retorno === 2) {
        this.adicionarCoberturaEnSeccion(p);
      }
    });

  }

  cambiarNombreSeccion(p: CoberturaProductoRow) {
    const dialogRef = this.dialog.open(PedirTextoComponent, {
      width: '500px',
      data: {
        titulo: 'Nombre de Seccion',
        leyenda: 'Seccion',
        texto: p.leyenda
      }
    });

    dialogRef.afterClosed()
    .subscribe(results => {
      const retorno: string = results;

      if (retorno !== '') {
        const param = new CoberturaProducto();
        param.id_producto = this.idProducto;
        param.ID = p.seccion;
        param.descripcion = retorno;

        this.auxiliar.setCoberturaProductoNombreSeccion(param)
        .subscribe(ret => {
          this.dibujarCoberturas();
        }, error => {
          this.auxiliar.msgErrorDB('Error al guardar cambios', error);
        });
      }
    });
  }

  adicionarCoberturaEnSeccion(p: CoberturaProductoRow) {
    const dialogRef = this.dialog.open(PedirTextoComponent, {
      width: '500px',
      data: {
        titulo: 'Nueva Cobertura en Seccion',
        leyenda: 'Cobertura',
        texto: ''
      }
    });

    dialogRef.afterClosed()
    .subscribe(results => {
      const retorno: string = results;

      if (retorno !== '') {
        const param = new CoberturaProducto();
        param.id_producto = this.idProducto;
        param.ID = p.seccion;
        param.descripcion = retorno;

        this.auxiliar.setCoberturaProductoEnSeccion(param)
        .subscribe(ret => {
          this.dibujarCoberturas();
        }, error => {
          this.auxiliar.msgErrorDB('Error al guardar cambios', error);
        });
      }
    });
  }

  accionesCobertura(p: CoberturaProductoRow) {

    console.log('Acciones Cobertura', p);

    const listadoOpciones = ['Cambiar Descripcion Cobertura', 'Eliminar Cobertura'];

    const dialogRef = this.bottomSheet.open(OpcionesComponent, {
      data: {
        opciones: listadoOpciones
      }
    });

    dialogRef.afterDismissed()
    .subscribe(results => {
      const retorno: number = results;

      if (retorno === 1) {
        this.cambiarNombreCobertura(p);
      }
      if (retorno === 2) {
        this.eliminarCobertura(p);
      }
    });

  }

  cambiarNombreCobertura(p: CoberturaProductoRow) {
    const dialogRef = this.dialog.open(PedirTextoComponent, {
      width: '500px',
      data: {
        titulo: 'Nombre de Cobertura',
        leyenda: 'Cobertura',
        texto: p.leyenda
      }
    });

    dialogRef.afterClosed()
    .subscribe(results => {
      const retorno: string = results;

      if (retorno !== '') {
        const param = new CoberturaProducto();
        param.id_producto = this.idProducto;
        param.id_cobertura = p.seccion;
        param.ID = p.id_grupo;
        param.descripcion = retorno;

        this.auxiliar.setCoberturaProducto(param)
        .subscribe(ret => {
          this.dibujarCoberturas();
        }, error => {
          this.auxiliar.msgErrorDB('Error al guardar cambios', error);
        });
      }
    });
  }

  eliminarCobertura(p: CoberturaProductoRow) {
    const param = new CoberturaProducto();
    param.ID = p.idDetalle;

    this.auxiliar.deleteCoberturaProducto(param)
    .subscribe(ret => {
      this.dibujarCoberturas();
    }, error => {
      this.auxiliar.msgErrorDB('Error al eliminar cobertura', error);
    });
  }

  accionesDetalleCobertura(p: CoberturaProductoColumn) {
    const dialogRef = this.dialog.open(ProductoCoberturaEditComponent,
      {
        width: '500px',
        data: {
          idDetalle: p.idDetalle,
          detalle: p.detalle
        }
      });

    dialogRef.afterClosed()
    .subscribe(results => {
      const retorno: number = results;

      if (retorno === 1) {
        this.dibujarCoberturas();
      }
    });
  }

}
