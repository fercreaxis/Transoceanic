export class Reclamo {
    ID: number;
    estado: number;
    nombre_estado: string;
    color_estado: string;
    id_ramo: number;
    id_aseguradora: number;
    nombre_aseguradora: string;
    tipo_contacto: string;
    id_contacto: number;
    nombre_contacto: string;
    fecha_evento: Date;
    fecha_reclamo: Date;
    descripcion_evento: string;
    inciso: string;
    edad: string;
    sexo: string;
    id_contrato: number;
    poliza: string;
    certificado: string;
    observaciones: string;
    usuario_registra: string;


    constructor() {
        this.ID = 0;
        this.estado = 0;
        this.nombre_estado = '';
        this.color_estado = '';
        this.id_ramo = 0;
        this.id_aseguradora = 0;
        this.nombre_aseguradora = '';
        this.tipo_contacto = '';
        this.nombre_contacto = '';
        this.id_contacto = 0;
        this.fecha_evento = new Date();
        this.fecha_reclamo = new Date();
        this.descripcion_evento = '';
        this.edad = '';
        this.sexo = '';
        this.id_contrato = 0;
        this.poliza = '';
        this.inciso = '';
        this.certificado = '';
        this.observaciones = '';
        this.usuario_registra = '';
    }


}