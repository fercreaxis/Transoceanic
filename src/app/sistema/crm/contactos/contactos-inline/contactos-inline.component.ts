import { ContactoEditComponent } from './../contacto-edit/contacto-edit.component';
import { FiltroConsulta } from './../../../../_models/filtroconsulta.model';
import { Relacion } from './../../../../_models/relacion.model';
import { Contacto } from './../../../../_models/contacto.model';
import { MatTableDataSource } from '@angular/material/table';
import { AuxiliarService } from './../../../../lib/auxiliar.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-contactos-inline',
  templateUrl: './contactos-inline.component.html',
  styleUrls: ['./contactos-inline.component.css'],
})
export class ContactosInlineComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @Input() tipo_origen: string;
  @Input() id_origen: number;

  constructor(
    public auxiliar: AuxiliarService,
    public dialog: MatDialog
  ) {}

  contactosLista: Contacto[] = [];

  dataSource = new MatTableDataSource<Contacto>();
  displayedColumns = [
    'id',
    'nombre',
    'telefono_primario',
    'celular',
    'nombre_relacion',
    'editar',
  ];

  nombreRelacion: Relacion = new Relacion(0, 0, '', 0, '');

  filtro: FiltroConsulta = {
    id: 0,
    tipo_opcion_1: 'aseg',
    tipo_opcion_2: '',
    tipo_opcion_3: '',
    opcion_1: 1,
    opcion_2: 0,
    opcion_3: 0,
  };

  ngOnInit() {
    this.cargarContactos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarContactos() {
    this.filtro.tipo_opcion_1 = this.tipo_origen;
    this.filtro.opcion_1 = this.id_origen;

    this.auxiliar.getContactos(this.filtro).subscribe(
      (resultados) => {
        this.contactosLista = resultados;
        this.dataSource.data = this.contactosLista;
      },
      (error) => {
        this.auxiliar.msgErrorDB('Error al cargar contactos', error);
      }
    );
  }

  nuevo() {
    this.crearContacto();
  }

  crearContacto() {
    const dialog_crear = this.dialog.open(ContactoEditComponent, {
      width: '800px',
      data: {
        tipo_origen: this.tipo_origen,
        id_origen: this.id_origen,
        modo_dialog: true,
        respuesta: false,
        id: 0,
      },
    });

    dialog_crear.afterClosed().subscribe((result) => {
      if (result != null) {
        this.cargarContactos();
      }
    });
  }

  editarContacto(id_editar: number) {
    console.log('id a editar', id_editar);

    const dialog_crear = this.dialog.open(ContactoEditComponent, {
      width: '800px',
      data: {
        tipo_origen: this.tipo_origen,
        id_origen: this.id_origen,
        modo_dialog: true,
        respuesta: false,
        id: id_editar,
      },
    });
    // Comentario de que esto esta bueno

    dialog_crear.afterClosed().subscribe((result) => {
      if (result != null) {
        this.cargarContactos();
      }
    });
  }

  opcionesContacto() {
    // const opciones = ['Crear Nuevo', 'Buscar en Lista'];
    // const dialogRef = this.dialog.open(OptionsDialogComponent, {
    //   width: '250px',
    //   data: {
    //     titulo: 'Opciones',
    //     texto: 'Seleccione una opción',
    //     opciones: opciones,
    //   },
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   const retorno: number = result;
    //   if (retorno == 1) {
    //     this.crearContacto();
    //   }
    //   if (retorno == 2) {
    //     this.seleccionarContacto();
    //   }
    // });
  }

  seleccionarContacto() {
    // const dialogRef = this.dialog.open(ContactosDialogComponent, {
    //   width: '800px',
    //   height: '400px',
    //   data: {
    //     titulo: 'Opciones',
    //     texto: 'Seleccione un contacto',
    //     pid_origen: this.id_origen,
    //     ptipo_origen: this.tipo_origen,
    //   },
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('Se cerro el primer Dialog');
    //   const retorno: number = result;
    //   console.log('Cerro la ventana');
    //   this.cargarContactos();
    //   console.log('id contacto', retorno);
    // });
  }
}
