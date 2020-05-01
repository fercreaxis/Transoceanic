import { Router, ActivatedRoute } from '@angular/router';
import { AuxiliarService } from './../../../../lib/auxiliar.service';
import { Ramo } from './../../../../_models/ramo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ramo-edit',
  templateUrl: './ramo-edit.component.html',
  styleUrls: ['./ramo-edit.component.css']
})
export class RamoEditComponent implements OnInit {

  constructor(public auxiliar: AuxiliarService,
    public router: Router,
    public activatedRoute: ActivatedRoute
    ) { }
  sub: any;
  idRamo: number;
  miRamo: Ramo; // = new Ramo(0, '', 'I', '');
  tempPctISV = 0;

  categorias = [{ value: 'B', viewValue: 'Bienes' }, { value: 'P', viewValue: 'Personas' }];

  ngOnInit() {
    this.auxiliar.ubicacionActual = 'Editando Ramo';

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.idRamo = +paramMap.get('Id');

      if (this.idRamo > 0) {
        this.getRamo(this.idRamo);
      }

    });

  }

  getRamo(id: number) {

    const param = new Ramo();
    param.ID = id;

    this.auxiliar.getRamos(param)
    .subscribe(results => {
      this.miRamo = [... results][0];
    }, error => {
      this.auxiliar.msgErrorDB('Error al cargar ramo', error);
    });

    this.tempPctISV = this.miRamo.pctISV;
  }

  setRamo() {
    this.miRamo.individual_colectivo = 'I';
    this.auxiliar.setRamo(this.miRamo)
      .subscribe(result => {
        this.backToRamo();
      }, error => {
        console.log('Error al guardar: ', error);

      });
  }

  backToRamo() {
    this.router.navigateByUrl('adm/ramos');
  }
  // individial_colectivo = [{ value: 'I', viewValue: 'Individual' }, { value: 'C', viewValue: 'Colectivo' }];



}
