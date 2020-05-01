import { Aseguradora } from './../../../../../_models/aseguradora.model';
import { Producto } from './../../../../../_models/producto.model';
import { AuxiliarService } from './../../../../../lib/auxiliar.service';
import { Ramo } from './../../../../../_models/ramo.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {
  @Input() idAseguradora: number;
  @Input() idProducto: number;

  @Output() finEditarProductoEvent: EventEmitter<any> = new EventEmitter();



  individial_colectivo = [{ value: 'I', viewValue: 'Individual' }, { value: 'C', viewValue: 'Colectivo' }];
  producto: Producto;
  ramos: Ramo[];

  constructor(public auxiliar: AuxiliarService) { }

  ngOnInit() {
    this.getRamos();

  }

  getProducto() {
    if (this.idProducto > 0) {
      // Producto Existente
      const param = new Aseguradora();
      param.ID = this.idAseguradora;
      param.codigo_str = this.idProducto.toString();
      this.auxiliar.getProductosAseguradora(param)
      .subscribe(results => {
        this.producto = results[0];
      }, error => {
        this.auxiliar.msgErrorDB('Error al obtener datos de producto', error);
      });
    } else {
      // Producto Nuevo
      this.producto = new Producto();
    }

  }

  getRamos() {
    const param: Ramo = new Ramo();
    this.auxiliar.getRamos(param)
      .subscribe(result => {
        this.ramos = result;

        this.getProducto();
      }, error => {
        this.auxiliar.msgErrorDB('Error al cargar ramos', error);
      });
  }

  setProducto() {
    this.auxiliar.setProducto(this.producto)
      .subscribe(result => {
        this.backToProductos();
      }, error => {
        this.auxiliar.msgErrorDB('Error al guardar producto', error);
      });
  }

  backToProductos() {
    this.finEditarProductoEvent.emit();
  }


}
