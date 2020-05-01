export class Aseguradora {
    ID: number;
    nombre: string;
    telefonos: string;
    codigo_str: string;
    estado: boolean;
    dia_corte_1: number;
    dia_corte_2: number;
    fecha_cierre: Date;
    telefono_asistencia: string;
    razon_social: string;
    direccion: string;
    rtn: string;

    constructor() {
        this.ID = 0;
        this.nombre = '';
        this.telefonos = '';
        this.codigo_str = '';
        this.estado = true;
        this.dia_corte_1 = 0;
        this.dia_corte_2 = 0;
        this.fecha_cierre = new Date();
        this.telefono_asistencia = '';
        this.razon_social = '';
        this.direccion = '';
        this.rtn = '';
    }
}
