import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css'],
})
export class OpcionesComponent implements OnInit {
  opciones: string[] = [];
  constructor(
    private bottomSheetRef: MatBottomSheetRef<OpcionesComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) data: any
  ) {
    this.opciones = data.opciones;
  }

  ngOnInit(): void {}

  retornar(id: number) {
    id = id + 1;
    this.bottomSheetRef.dismiss(id);
  }

  cancelar() {
    this.bottomSheetRef.dismiss(0);
  }
}
