export class Producto {
  public ID: number;
  public id_aseguradora: number;
  public nombre_aseguradora: string;
  public id_ramo: number;
  public nombre_ramo: string;
  public nombre: string;
  public individual_colectivo: string;

  constructor() {
    this.ID = 0;
    this.id_aseguradora = 0;
    this.nombre_aseguradora = '';
    this.id_ramo = 0;
    this.nombre_ramo = '';
    this.nombre = '';
    this.individual_colectivo = '';
  }
}
