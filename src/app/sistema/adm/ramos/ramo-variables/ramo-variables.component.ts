import { MatDialog } from '@angular/material/dialog';
import { AuxiliarService } from './../../../../lib/auxiliar.service';
import { MatTableDataSource } from '@angular/material/table';
import { Variable } from './../../../../_models/variable.model';
import { Ramo } from './../../../../_models/ramo.model';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ramo-variables',
  templateUrl: './ramo-variables.component.html',
  styleUrls: ['./ramo-variables.component.css']
})
export class RamoVariablesComponent implements OnInit, AfterViewInit {
  @Input() idRamo: number;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  variables: Variable[];

  loading = false;

  dataSource = new MatTableDataSource<Variable>();
  displayedColumns = ['descripcion', 'editar'];

  constructor(public auxiliar: AuxiliarService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.getVariables();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getVariables() {
    const param = new Variable();
    param.id_ramo = this.idRamo;
    this.auxiliar.getVariablesRamo(param)
      .subscribe(result => {
        this.variables = result;

        this.dataSource.data = this.variables;
      }, error => {
        this.auxiliar.msgErrorDB('Error al cargar variables', error);
      });
  }

  newVariable() {
  }

  preEliminarVariable(variable: Variable) {
  }

  deleteVariable(variable: Variable) {
  }

  editVariableById(variable: Variable) {
  }


}
