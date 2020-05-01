export class CoberturaProductoColumn {
    id_grupo: number;
    id_plan: number;
    detalle: string;
    leyenda: string;
    idDetalle: number;

    constructor() {
        this.id_grupo = 0;
        this.id_plan = 0;
        this.detalle = '';
        this.leyenda = '';
        this.idDetalle = 0;
    }
}
