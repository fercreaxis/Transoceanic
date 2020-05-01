import { AuxiliarService } from './../../../../lib/auxiliar.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aseguradora } from 'src/app/_models';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-aseguradora-edit',
  templateUrl: './aseguradora-edit.component.html',
  styleUrls: ['./aseguradora-edit.component.css']
})
export class AseguradoraEditComponent implements OnInit {

  aseguradoraId = 0;
  private sub: any;
  a: Aseguradora;
  f: NgForm;
  tipo_origen = 'aseg';
  idProductoEdicion = 0;
  modoEdicion = false;

  constructor(public auxiliar: AuxiliarService
    , public router: Router
    , public route: ActivatedRoute
    , public dialog: MatDialog
    , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.auxiliar.ubicacionActual = 'Editar Aseguradora';

    this.getId();
  }


  getId() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.aseguradoraId = +paramMap.get('Id');

      this.cargarAseguradora();
    });
  }

  backToPlanesList() {
    // Para poder eliminar la lista de planes y asi poder ver los productos cuando se haga tab
  }

  esRegistroNuevo(): boolean {
    if (this.aseguradoraId === 0) {
      return true;
    }
    return false;

  }

  cargarAseguradora() {

    if (this.aseguradoraId > 0) {
      this.auxiliar.getAseguradora(this.aseguradoraId, 0)
        .subscribe(results => {
          this.a = results[0];

          this.auxiliar.ubicacionActual = 'Editar Aseguradora: ' + this.a.nombre;

        }
          , error => {
            console.log('Error al consultar aseguradora', error);
          });

    } else {
      // Registro nuevo
      this.a = new Aseguradora();
    }
  }

  regresar(): void {
    this.router.navigateByUrl('/adm/aseguradoras');
  }

  guardarAseguradora(): void {
    this.auxiliar.setAseguradora(this.a)
      .subscribe(results => {
        this.regresar();
      }
        , error => {
          this.auxiliar.msgErrorDB('Error al guardar', error);
        }
      );
  }

  deleteAseguradora(): void {
    this.auxiliar.deleteAseguradora(this.aseguradoraId)
      .subscribe(results => {
        this.regresar();
      }
        , error => {
          this.auxiliar.msgErrorDB('Error al Eliminar Aseguradora: ', error);
        }
      );

  }

  preEliminarAseguradora() {

    // let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    //   width: '250px',
    //   data: { titulo: "Confirme", texto: "Esta Seguro de Proceder?", respuesta: false }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   const retorno: boolean = result;

    //   if (retorno) {
    //     this.eliminarAseguradora();
    //   }
    // });
  }

  enEdicionProducto() {
    if (!this.a) {
      return false;
    }

    return this.modoEdicion;
  }

  enListadoProductos() {
    if (!this.a) {
      return false;
    }

    return (!this.modoEdicion);
  }

  // Eventos de Edicion de Productos
  onIniciarEdicionProducto(eventData: any) {
    this.idProductoEdicion = eventData.idProductoEditado;
    this.modoEdicion = true;
  }

  onFinEdicionProducto() {
    this.idProductoEdicion = 0;
    this.modoEdicion = false;
  }
}
