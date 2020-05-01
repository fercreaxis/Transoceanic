import { OpcionesComponent } from './../../../shared/opciones/opciones.component';
import { MatDialog } from '@angular/material/dialog';
import { AuxiliarService } from './../../../../lib/auxiliar.service';
import { Aseguradora } from './../../../../_models/aseguradora.model';
import { Producto } from './../../../../_models/producto.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, AfterViewInit {
  @Input() tipoOrigen: string;
  @Input() idAseguradora: number;

  @Output() inicioEditarProductoEvent: EventEmitter<{idProductoEditado: number}> = new EventEmitter();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  loading = true;

  dataSource = new MatTableDataSource<Producto>();
  displayedColumns = ['nombre', 'nombre_ramo', 'individual_colectivo', 'editar'];

  miProducto: Producto;
  productos: Producto[];

  constructor(public auxiliar: AuxiliarService,
              public bottomSheet: MatBottomSheet ) { }

  ngOnInit() {
    this.getProductos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getProductos() {
    const param = new Aseguradora();
    param.ID = this.idAseguradora;
    this.auxiliar.getProductosAseguradora(param)
      .subscribe(result => {
        console.log(result);
        this.productos = result;
        this.dataSource.data = this.productos;
        this.loading = false;
      }, error => {
        this.auxiliar.msgErrorDB('Error al consultar productos', error);
      });
  }

  preEliminarProducto(producto: Producto) {

    const listadoOpciones = ['Eliminar Producto'];

    const dialogRef = this.bottomSheet.open(OpcionesComponent, {
      data: {
        opciones: listadoOpciones
      }
    });

    dialogRef.afterDismissed().subscribe(result => {
      const retorno: number = result;

      if (retorno === 1) {
        this.deleteProducto(producto);
      }
    });
  }

  nuevoProducto() {
    this.inicioEditarProductoEvent.emit({idProductoEditado: 0});
  }

  editarProducto(p: Producto) {
    this.inicioEditarProductoEvent.emit({idProductoEditado: p.ID});
  }

  clonarProducto(p: Producto) {
  }


  deleteProducto(producto: Producto) {
  }



}
