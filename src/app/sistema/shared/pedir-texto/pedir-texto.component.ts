import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pedir-texto',
  templateUrl: './pedir-texto.component.html',
  styleUrls: ['./pedir-texto.component.css']
})
export class PedirTextoComponent implements OnInit {
  titulo = '';
  leyenda = '';
  texto = '';

  constructor(
    public matDialogRef: MatDialogRef<PedirTextoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.titulo = data.titulo;
    this.leyenda = data.leyenda;
    this.texto = data.texto;
  }

  ngOnInit(): void {
  }

  retornar() {
    this.matDialogRef.close(this.texto);
  }

  cancelar() {
    this.matDialogRef.close('');
  }

}
