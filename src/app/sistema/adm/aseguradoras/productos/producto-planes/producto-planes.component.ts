import { OpcionesComponent } from './../../../../shared/opciones/opciones.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PedirTextoComponent } from './../../../../shared/pedir-texto/pedir-texto.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Plan } from './../../../../../_models/plan.model';
import { AuxiliarService } from './../../../../../lib/auxiliar.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto-planes',
  templateUrl: './producto-planes.component.html',
  styleUrls: ['./producto-planes.component.css']
})
export class ProductoPlanesComponent implements OnInit {
  @Input() idProducto: number;

  planes: Plan[] = [];

  dataSource = new MatTableDataSource<Plan>();
  displayedColumns = [
    'descripcion',
    'editar'
  ];

  constructor(public auxiliar: AuxiliarService,
    public dialogCtrl: MatDialog,
    public matBottomCtrl: MatBottomSheet) { }

  ngOnInit(): void {
    this.getPlanes();
  }

  getPlanes() {
    const param = new Plan();
    param.id_producto = this.idProducto;

    this.auxiliar.getPlanesProducto(param)
    .subscribe(results => {
      this.planes = results;
      this.dataSource.data = this.planes;

    }, error => {
      this.auxiliar.msgErrorDB('Error al cargar planes', error);
    });
  }

  editarPlan(p: Plan) {
    const dialogRef = this.dialogCtrl.open(PedirTextoComponent, {
      data: {
        titulo: 'Editar Plan',
        leyenda: 'Nombre Plan',
        texto: p.descripcion
      }
    });

    dialogRef.afterClosed()
    .subscribe(results => {
      const retorno: string = results;

      if (retorno !== '') {
        const param = new Plan();
        param.id_producto = this.idProducto;
        param.ID = p.ID;
        param.descripcion = retorno;

        this.auxiliar.setPlan(param)
        .subscribe(res => {
          this.getPlanes();
        }, error => {
          this.auxiliar.msgErrorDB('Error al guardar plan', error);
        });
      }
    });
  }

  clonePlan(p: Plan) {

    const nuevoPlan = new Plan();
    nuevoPlan.ID = p.ID;
    nuevoPlan.id_producto = 0; // Se usara para flag de copiar o no el detalle

    const listaOpciones = ['COPIAR DETALLE', 'NO COPIAR DETALLE'];
    const matBottomRef = this.matBottomCtrl.open(OpcionesComponent,
      {
        data: {
          opciones: listaOpciones
        }
      });

    matBottomRef.afterDismissed()
    .subscribe(resultBottom => {
      const retBottom: number = resultBottom;

      if (retBottom === 1) {
        nuevoPlan.id_producto = 1;
      }

      const dialogRef = this.dialogCtrl.open(PedirTextoComponent, {
        data: {
          titulo: 'Clonar Plan',
          leyenda: 'Nuevo Plan',
          texto: ''
        }
      });

      dialogRef.afterClosed()
      .subscribe(results => {
        const retorno: string = results;

        if (retorno !== '') {
          nuevoPlan.descripcion = retorno;

          this.auxiliar.clonePlan(nuevoPlan)
          .subscribe(res => {
            this.getPlanes();
          }, error => {
            this.auxiliar.msgErrorDB('Error al clonar plan', error);
          });
        }
      });
    });
  }

  nuevoPlan() {
    const dialogRef = this.dialogCtrl.open(PedirTextoComponent, {
      data: {
        titulo: 'Nuevo Plan',
        leyenda: 'Nombre Plan',
        texto: ''
      }
    });

    dialogRef.afterClosed()
    .subscribe(results => {
      const retorno: string = results;

      if (retorno !== '') {
        const param = new Plan();
        param.id_producto = this.idProducto;
        param.ID = 0;
        param.descripcion = retorno;

        this.auxiliar.setPlan(param)
        .subscribe(res => {
          this.getPlanes();
        }, error => {
          this.auxiliar.msgErrorDB('Error al guardar nuevo plan', error);
        });
      }
    });
  }

}
