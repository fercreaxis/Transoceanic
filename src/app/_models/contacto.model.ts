export class Contacto {
    id: number;
    nombre: string;
    telefono_primario: string;
    extension: string;
    celular: string;
    cargo: string;
    fecha_nacimiento: Date;
    tipo_origen: string;
    id_origen: number;
    empresa: string;
    identidad: string;
    tipo_sangre: string;
    email_personal: string;
    telefono_oficina: string;
    email_trabajo: string;
    nombre_relacion: string;
    referencia: string;
    observaciones: string;
    valor_numerico: number;
    representanteLegal: string;
    eliminado: number;
    usuarioIngresa: string;
    opcion01: number;
    opcion02: number;
    opcion03: number;
    fechaNacimientoMostrar: string;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.telefono_primario = '';
        this.extension = '';
        this.celular = '';
        this.cargo = '';
        this.fecha_nacimiento = new Date();
        this.tipo_origen = '';
        this.id_origen = 0;
        this.empresa = '';
        this.identidad = '';
        this.tipo_sangre = '';
        this.email_personal = '';
        this.telefono_oficina = '';
        this.email_trabajo = '';
        this.nombre_relacion = '';
        this.referencia = '';
        this.observaciones = '';
        this.valor_numerico = 0;
        this.representanteLegal = '';
        this.eliminado = 0;
        this.usuarioIngresa = '';
        this.opcion01 = 0;
        this.opcion02 = 0;
        this.opcion03 = 0;
        this.fechaNacimientoMostrar = '';
    }
}
