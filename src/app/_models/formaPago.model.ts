export class FormaPago {
    ID: number;
    descripcion: string;
    cantidad_pagos: number;

    constructor() {
        this.ID = 0;
        this.descripcion = '';
        this.cantidad_pagos = 0;
    }
}