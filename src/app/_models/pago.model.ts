export class Pago {
    ID: number;
    id_contrato: number;
    fecha_pago: Date;
    id_moneda: number;
    monto_pago: number;
    numero_cuota: number;
    ano: number;
    mes: number;
    fecha_registro: Date;
    usuario_registra: string;
    estado: number;
    descripcion_cuota: string;
    tipo: string;
    notas_pago: string;
    origen: string;
    debito_automatico: number;
    nombre_cliente: string;
    poliza: string;
    fecha_pago_str: string;
    constructor() {
        this.ID = 0;
        this.id_contrato = 0;
        this.fecha_pago = new Date();
        this.id_moneda = 0;
        this.monto_pago = 0;
        this.numero_cuota = 0;
        this.ano = 0;
        this.mes = 0;
        this.fecha_registro = new Date();
        this.usuario_registra = '';
        this.estado = 0;
        this.descripcion_cuota = '';
        this.tipo = '';
        this.notas_pago = '';
        this.origen = '';
        this.debito_automatico = 0;
        this.nombre_cliente = '';
        this.poliza = '';
        this.fecha_pago_str = '';
    }
}