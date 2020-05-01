export class Relacion{
	public ID : number;
	public id_contacto : number;
	public tipo_origen : string;
	public id_origen : number;
    public nombre_relacion : string;
    
    constructor(pID:number, pId_contacto:number, pTipo_origen:string, pId_origen:number, pNombre_relacion:string){
        this.ID = pID;
        this.id_contacto = pId_contacto;
        this.tipo_origen = pTipo_origen;
        this.id_origen = pId_origen;
        this.nombre_relacion = pNombre_relacion;
    }
}