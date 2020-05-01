import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuxiliarService } from './../../../../lib/auxiliar.service';
import { MatTableDataSource } from '@angular/material/table';
import { Cobertura } from './../../../../_models/cobertura.model';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ramo-coberturas',
  templateUrl: './ramo-coberturas.component.html',
  styleUrls: ['./ramo-coberturas.component.css']
})
export class RamoCoberturasComponent implements OnInit, AfterViewInit {
  @Input() idRamo: number;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


  loading = false;
  coberturas: Cobertura[];

  dataSource = new MatTableDataSource<Cobertura>();
  displayedColumns = ['descripcion', 'editar'];

  constructor(public auxiliar: AuxiliarService,
              public router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getCoberturas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getCoberturas() {
    const param = new Cobertura();
    param.id_ramo = this.idRamo;

    this.auxiliar.getCoberturas(param)
      .subscribe(result => {
        this.coberturas = result;
        this.dataSource.data = result;
      }, error => {
        this.auxiliar.msgErrorDB('Error al obtener coberturas', error);
      });
  }

  editCoberturaByID(cobertura) {

  }

  nuevo() {

  }

  deleteCobertura(cober: Cobertura) {

  }

}
