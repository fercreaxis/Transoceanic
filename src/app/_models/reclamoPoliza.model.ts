export class ReclamoPoliza {
    id_aseguradora: number;
    id_asegurado_principal: number;
    id_contrato: number;
    id_producto: number;
    descripcion_producto: string;

    constructor() {
        this.id_aseguradora = 0;
        this.id_asegurado_principal = 0;
        this.id_contrato = 0;
        this.id_producto = 0;
        this.descripcion_producto = '';
    }
}