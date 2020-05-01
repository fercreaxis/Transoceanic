import { Router } from '@angular/router';
import { AuxiliarService } from './../../../lib/auxiliar.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Aseguradora } from 'src/app/_models';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-aseguradoras',
  templateUrl: './aseguradoras.component.html',
  styleUrls: ['./aseguradoras.component.css']
})
export class AseguradorasComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Aseguradora>();
  displayedColumns = ['nombre', 'telefonos', 'telefono_asistencia', 'codigo_str', 'editar'];

  aseguradoras: Aseguradora[];
  mostrar_todos = false;
  loading = true;

  private nativeElement: Node;

  constructor(public _auxiliarService: AuxiliarService
    , public router: Router
    , private element: ElementRef
  ) {
    this.aseguradoras = [];
    this.nativeElement = element.nativeElement;
    this._auxiliarService.ubicacionActual = 'Aseguradoras';
  }

  ngOnInit() {
    this.cargarAseguradoras();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarAseguradoras() {

    let pmostrar_todos = 0;

    if (this.mostrar_todos) {
      pmostrar_todos = 1;
    }

    this._auxiliarService.getAseguradoras(pmostrar_todos)
      .subscribe(results => {
        this.aseguradoras = results;
        this.dataSource.data = this.aseguradoras;
        this.loading = false;

      }
        , error => {
          this._auxiliarService.msgErrorDB('Error al cargar aseguradoras', error);
          this.loading = false;
        });
  }

  editarAseguradora(a: Aseguradora) {
    this.router.navigate(['/', 'adm', 'aseguradoras', 'aseguradora', a.ID]);
  }

  nuevo(): void {
    this.router.navigate(['/', 'adm', 'aseguradoras', 'aseguradora', '0']);

  }



}
