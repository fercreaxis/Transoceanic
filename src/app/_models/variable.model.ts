export class Variable {
    ID: number;
    id_ramo: number;
    nombre_variable: string;
    valor_variable: string;
    requerida: number;

    constructor() {
        this.ID = 0;
        this.id_ramo = 0;
        this.nombre_variable = '';
        this.requerida = 0;
        this.valor_variable = '';
    }
}
