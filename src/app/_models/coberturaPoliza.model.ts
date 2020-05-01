export class CoberturaPoliza {
    seccion: number;
    orden: number;
    leyenda: string;
    subleyenda: string;
    id_grupo: number;
    opciones: number;
    estado: number;
    id: number;

    constructor(seccion: number, orden: number, leyenda: string, subleyenda: string, id_grupo: number, opciones: number, estado: number, id: number) {
        this.seccion = seccion;
        this.orden = orden;
        this.leyenda = leyenda;
        this.subleyenda = subleyenda;
        this.id_grupo = id_grupo;
        this.opciones = opciones;
        this.estado = estado;
        this.id = id;
    }
}