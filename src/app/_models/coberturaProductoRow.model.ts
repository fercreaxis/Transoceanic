export class CoberturaProductoRow {
    seccion: number;
    orden: number;
    leyenda: string;
    id_grupo: number;
    opciones: number;
    idDetalle: number;

    constructor() {
        this.seccion = 0;
        this.orden = 0;
        this.leyenda = '';
        this.id_grupo = 0;
        this.opciones = 0;
        this.idDetalle = 0;
    }
}
