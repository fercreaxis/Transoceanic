import { MatDialog } from '@angular/material/dialog';
import { AuxiliarService } from './../../../../lib/auxiliar.service';
import { MatTableDataSource } from '@angular/material/table';
import { Variable } from './../../../../_models/variable.model';
import { MatPaginator } from '@angular/material/paginator';
import { Ramo } from './../../../../_models/ramo.model';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ramo-variables-reclamos',
  templateUrl: './ramo-variables-reclamos.component.html',
  styleUrls: ['./ramo-variables-reclamos.component.css']
})
export class RamoVariablesReclamosComponent implements OnInit, AfterViewInit {
  @Input() idRamo: number;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  variables: Variable[];
  loading = false;

  dataSource = new MatTableDataSource<Variable>();
  displayedColumns = ['descripcion', 'editar'];

  constructor(public auxiliar: AuxiliarService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getVariables();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  newVariable() {
  }

  getVariables() {
    const param = new Variable();
    param.id_ramo = this.idRamo;

    this.auxiliar.getVariablesReclamo(param)
      .subscribe(result => {
        this.variables = result;
        this.dataSource.data = this.variables;
      }, error => {
        this.auxiliar.msgErrorDB('Error al cargar variables', error);
      });
  }

  editVariableById(variable: Variable) {
  }

  preEliminarVariable(variable: Variable) {
  }

  deleteVariable(variable: Variable) {
  }

}
