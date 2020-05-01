import { MatPaginator } from '@angular/material/paginator';
import { AuxiliarService } from './../../../lib/auxiliar.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ramo } from '../../../_models';

declare const $: any;

const md: any = {
  misc: {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
  }
};

@Component({
  selector: 'app-ramos',
  templateUrl: './ramos.component.html',
  styleUrls: ['./ramos.component.css']
})
export class RamosComponent implements OnInit, AfterViewInit {

  constructor(public auxiliar: AuxiliarService, public router: Router) {
    this.auxiliar.ubicacionActual = 'Ramos';
  }


  miRamo: Ramo = new Ramo();
  Ramos: Ramo[];
  loading = false;

  dataSource = new MatTableDataSource<Ramo>();
  displayedColumns = ['nombre', 'categoria', 'editar']; // , 'individual_colectivo'

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit() {
    this.getRamos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getRamos() {
    this.loading = true;
    this.auxiliar.getRamos(this.miRamo)
      .subscribe(result => {
        this.loading = false;
        this.Ramos = result;
        this.dataSource.data = this.Ramos;
        this.loading = false;
      }, error => {
        this.loading = false;
        this.auxiliar.msgErrorDB('Error al cargar ramos', error);
      });
  }

  deleteRamo(ramo: Ramo) {
    this.auxiliar.deleteRamo(ramo)
      .subscribe(result => {
        this.getRamos();
      }, error => {
        this.auxiliar.msgErrorDB('Error al eliminar ramo', error);
      });
  }

  editRamoByID(ramo: Ramo) {
    this.router.navigate(['/', 'adm', 'ramos', 'ramo', ramo.ID]);
  }

  nuevo() {
    this.router.navigate(['/', 'adm', 'ramos', 'ramo', 0]);
  }
}
