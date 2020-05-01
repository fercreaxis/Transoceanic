export class EstadoReclamo {
    id: number;
    id_ramo: number;
    descripcion: string;
    orden: number;
    primero: number;
    ultimo: number;

    constructor() {
        this.id = 0;
        this.id_ramo = 0;
        this.descripcion = '';
        this.orden = 0;
        this.primero = 0;
        this.ultimo = 0;
    }
}