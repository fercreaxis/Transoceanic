export class GenerarCuotas {
    public id_contrato: number;
    public ano_inicial: number;
    public mes_inicial: number;
    public ano_final: number;
    public mes_final: number;
    public dia_pago: number;
    public id_forma_pago: number;
    public monto_cuota: number;
    public monto_cuota_inicial: number;
    public usuario_registra: string;
    public tipo: string;
    public fecha_cuota: Date;
    public agrupacion: string;

    constructor() {
        this.id_contrato = 0;
        this.ano_inicial = 0;
        this.mes_inicial = 0;
        this.ano_final = 0;
        this.mes_final = 0;
        this.dia_pago = 0;
        this.id_forma_pago = 0;
        this.monto_cuota = 0;
        this.monto_cuota_inicial = 0;
        this.usuario_registra = '';
        this.tipo = '';
        this.fecha_cuota = new Date();
        this.agrupacion = '';
    }
}