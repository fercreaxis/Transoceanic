export class Ramo {
    public ID: number;
    public nombre: string;
    public individual_colectivo: string;
    public categoria: string;
    public pctISV: number;
    public mostrarBeneficiarios: boolean;
    public mostrarDependientes: boolean;

    constructor() {
        this.ID = 0;
        this.nombre = '';
        this.individual_colectivo = 'I';
        this.categoria = 'B';
        this.pctISV = 0;
        this.mostrarBeneficiarios = false;
        this.mostrarDependientes = false;
    }
}
