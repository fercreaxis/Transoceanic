import { CoberturaProductoRow } from './../_models/coberturaProductoRow.model';
import { Login } from './../_models/Login.model';
import { EstadoReclamo } from './../_models/estadoReclamos.model';
import { FiltroConsulta } from './../_models/filtroconsulta.model';
import { GenerarCuotas } from './../_models/generarCuotas.model';
import { FormaPago } from './../_models/formaPago.model';
import { Pago } from './../_models/pago.model';
import { Cobertura } from './../_models/cobertura.model';
import { CoberturaProductoColumn } from './../_models/coberturaProductoColumn.model';
import { CoberturaProducto } from './../_models/coberturaProducto.model';
import { Variable } from './../_models/variable.model';
import { VariableContrato } from './../_models/variableContrato.model';
import { CoberturaPoliza } from './../_models/coberturaPoliza.model';
import { Reclamo } from './../_models/reclamo.model';
import { Aseguradora } from './../_models/aseguradora.model';
import { Producto } from './../_models/producto.model';
import { Plan } from './../_models/plan.model';
import { Contacto } from './../_models/contacto.model';
import { Ramo } from './../_models/ramo.model';
import { Poliza } from './../_models/Poliza.model';
import { Relacion } from './../_models/relacion.model';
import { Notificacion } from './../_models/notificacion.model';

import { LoginData } from './../_models/logindata.model';

import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import swal from 'sweetalert2';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuxiliarService {
  conectado = false;
  gerencial = false;
  public loginData: LoginData;
  public ubicacionActual = 'Dashboard';

  currentApi = 'http://localhost:56782/api/CorreduriaApi/';
  currentLocalStorage = 'DevCorrLoginData';

  devApi = 'http://localhost:56782/api/CorreduriaApi/';
  serverApi = 'http://creaxisapi.creaxis.xyz/api/CorreduriaApi';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(protected _http: HttpClient, protected snackBar: MatSnackBar) {}

  public getNombreSistema() {
    return 'Correduria Cloud - Rodríguez y Asociados - v.23.04.20a';
  }

  // -- Helpers -- //
  public msgPregunta(msg: string): Observable<boolean> {
    const studentsObservable = new Observable<boolean>((observer) => {
      swal({
        title: 'Confirmar',
        text: msg,
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          observer.next(true);
        } else {
          observer.next(false);
        }
      });
    });

    return studentsObservable;
  }

  public msgSuccess(ptitle: string, pmsg: string): void {
    swal({
      title: ptitle,
      text: pmsg,
      type: 'success',
      confirmButtonText: 'Ok',
    });
  }

  public msgError(ptitle: string, pmsg: string): void {
    swal({
      title: 'Error!',
      text: pmsg,
      type: 'error',
      confirmButtonText: 'Ok',
    });
  }

  public msgErrorDB(pmsg: string, errorDBObject: any): void {
    let errordb = '';

    if (errorDBObject.error.Message) {
      errordb = this.procesarErrorDB(errorDBObject.error.Message);
    } else {
      if (errorDBObject.message) {
        errordb = this.procesarErrorDB(errorDBObject.message);
      }
    }

    pmsg = pmsg + ' - ' + errordb;

    swal({
      title: 'Error!',
      text: pmsg,
      type: 'error',
      confirmButtonText: 'Ok',
    });
  }

  procesarErrorDB(mensaje: string): string {
    let retorno = '';
    let pos = 0;

    pos = mensaje.indexOf('Http failure response');

    if (pos >= 0) {
      return 'Error de Conexion a Internet';
    }

    pos = mensaje.indexOf('DB!');

    retorno = mensaje;

    if (pos >= 0) {
      retorno = mensaje.substring(pos + 3);
      retorno = retorno.replace('}', '');
      retorno = retorno.replace('"', '');
    }

    return retorno;
  }

  snackMsg(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 2000,
      panelClass: 'snack-msg-success',
    });
  }

  snackMsgDanger(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 2000,
      panelClass: 'snack-msg-danger',
    });
  }

  // -- FIN Helpers -- //

  // -----------------LOGIN--------------------

  validarLogin(f: Login): Observable<Login> {
    const body = JSON.stringify(f);
    const url = this.currentApi + '/login/';
    return this._http.post<Login>(url, body, this.httpOptions);
  }

  // Login
  public isConnected(): boolean {
    this.loginData = JSON.parse(localStorage.getItem(this.currentLocalStorage));

    if (this.loginData) {
      this.gerencial = this.loginData.gerencial;
      return this.loginData.conectado;
    }

    return false;
  }

  public logout() {
    this.loginData = new LoginData();
    localStorage.setItem(this.currentLocalStorage, JSON.stringify(this.loginData));
  }

  public inicializarLogin(par: Login): boolean {
    this.loginData = new LoginData();

    this.loginData.usuarioConectado = par.username;
    this.loginData.nombreUsuarioConectado = par.name_user;
    this.loginData.conectado = true;
    this.loginData.nombreEmpresa = par.company_name;
    this.loginData.gerencial = par.kind === 1;

    this.gerencial = this.loginData.gerencial;

    localStorage.setItem(this.currentLocalStorage, JSON.stringify(this.loginData));

    return true;
  }

  public getUsuarioConectado(): string {
    return this.loginData.usuarioConectado;
  }

  public getNombreUsuarioConectado(): string {
    return this.loginData.nombreUsuarioConectado;
  }

  public getNombreEmpresa() {
    return this.loginData.nombreEmpresa;
  }

  // --  FIN ACCIONES LOGIN -- >>

  ////// -- BUSINESS LOGIC -- //////

  // -- NOTIFICACIONES -- //
  public getNotificaciones() {
    const retorno: Notificacion[] = [];

    retorno.push({ contenido: 'Hoy es el compleanos de Juan Perez' });
    retorno.push({ contenido: 'Existen 17 contratos vencidos' });
    retorno.push({ contenido: 'Se han registrado nuevas cuotas' });

    return retorno;
  }

  // -- VENDEDORES --//

  getVendedores(f: FiltroConsulta): Observable<Contacto[]> {
    const body = JSON.stringify(f);
    const url = this.currentApi + '/getVendedores/';

    return this._http.post<Contacto[]>(url, body, this.httpOptions);
  }

  setVendedor(nuevo: Contacto): Observable<Contacto> {
    const body = JSON.stringify(nuevo);
    const url = this.currentApi + '/setVendedor/';

    return this._http.post<Contacto>(url, body, this.httpOptions);
  }

  deleteVendedor(contacto: Contacto): Observable<Contacto> {
    const body = JSON.stringify(contacto);
    const url = this.currentApi + '/deleteVendedor/';

    return this._http.post<Contacto>(url, body, this.httpOptions);
  }

  activateVendedor(contacto: Contacto): Observable<Contacto> {
    const body = JSON.stringify(contacto);
    const url = this.currentApi + '/activateVendedor/';

    return this._http.post<Contacto>(url, body, this.httpOptions);
  }

  // -------------------------COBERTURAS POLIZA------------------------
  getCoberturasPoliza(poliza: Poliza): Observable<CoberturaPoliza[]> {
    const body = JSON.stringify(poliza);
    const url = this.currentApi + '/getCoberturasPoliza/';

    return this._http.post<CoberturaPoliza[]>(url, body, this.httpOptions);
  }

  setCoberturaPoliza(cobertura: CoberturaPoliza): Observable<CoberturaPoliza> {
    console.log('Actualizando detalle de cobertura', cobertura);

    const body = JSON.stringify(cobertura);
    const url = this.currentApi + '/setCoberturaPoliza/';

    return this._http.post<CoberturaPoliza>(url, body, this.httpOptions);
  }

  deleteCoberturaPoliza(
    cobertura: CoberturaPoliza
  ): Observable<CoberturaPoliza> {
    const body = JSON.stringify(cobertura);
    const url = this.currentApi + '/deleteCoberturaPoliza/';

    return this._http.post<CoberturaPoliza>(url, body, this.httpOptions);
  }

  // -------------------------DEPENDIENTES------------------------

  getDependiente(poliza: Poliza): Observable<Contacto[]> {
    const body = JSON.stringify(poliza);
    const url = this.currentApi + '/getDependientes/';

    return this._http.post<Contacto[]>(url, body, this.httpOptions);
  }

  setDependiente(beneficiario: Contacto): Observable<Contacto> {
    const body = JSON.stringify(beneficiario);
    const url = this.currentApi + '/setDependiente/';

    return this._http.post<Contacto>(url, body, this.httpOptions);
  }

  deleteDependiente(beneficiario: Contacto): Observable<Contacto> {
    const body = JSON.stringify(beneficiario);
    const url = this.currentApi + '/deleteDependiente/';

    return this._http.post<Contacto>(url, body, this.httpOptions);
  }

  // -------------------------Beneficiarios------------------------

  getBeneficiarios(poliza: Poliza): Observable<Contacto[]> {
    const body = JSON.stringify(poliza);
    const url = this.currentApi + '/getBeneficiarios/';

    return this._http.post<Contacto[]>(url, body, this.httpOptions);
  }

  setBeneficiario(beneficiario: Contacto): Observable<Contacto> {
    const body = JSON.stringify(beneficiario);
    const url = this.currentApi + '/setBeneficiario/';

    return this._http.post<Contacto>(url, body, this.httpOptions);
  }

  deleteBeneficiario(beneficiario: Contacto): Observable<Contacto> {
    const body = JSON.stringify(beneficiario);
    const url = this.currentApi + '/deleteBeneficiario/';

    return this._http.post<Contacto>(url, body, this.httpOptions);
  }

  // -----------VARIABLES CONTRATOS--------------------

  getVariablesPoliza(poliza: Poliza): Observable<VariableContrato[]> {
    const body = JSON.stringify(poliza);
    const url = this.currentApi + '/getVariablesContrato/';

    return this._http.post<VariableContrato[]>(url, body, this.httpOptions);
  }

  setVariableContrato(
    variable: VariableContrato
  ): Observable<VariableContrato> {
    const body = JSON.stringify(variable);
    const url = this.currentApi + '/setVariableContrato/';

    return this._http.post<VariableContrato>(url, body, this.httpOptions);
  }

  // -----------VARIABLE RECLAMO--------------------

  setVariableReclamo(variable: Variable): Observable<Variable> {
    const body = JSON.stringify(variable);
    const url = this.currentApi + '/setVariableReclamo/';

    return this._http.post<Variable>(url, body, this.httpOptions);
  }

  getVariablesReclamo(variable: Variable): Observable<Variable[]> {
    const body = JSON.stringify(variable);
    const url = this.currentApi + '/getVariablesReclamo/';

    return this._http.post<Variable[]>(url, body, this.httpOptions);
  }

  // ------------------------VARIABLES RAMO------------------------------

  setVariableRamo(variable: Variable): Observable<Variable> {
    const body = JSON.stringify(variable);
    const url = this.currentApi + '/setVariableRamo/';

    return this._http.post<Variable>(url, body, this.httpOptions);
  }

  getVariablesRamo(variable: Variable): Observable<Variable[]> {
    const body = JSON.stringify(variable);
    const url = this.currentApi + '/getVariablesRamo/';

    return this._http.post<Variable[]>(url, body, this.httpOptions);
  }

  deleteVariablesRamo(variable: Variable): Observable<Variable> {
    const body = JSON.stringify(variable);
    const url = this.currentApi + '/deleteVariableRamo/';

    return this._http.post<Variable>(url, body, this.httpOptions);
  }

  deleteCoberturaRamo(cober: Cobertura): Observable<Cobertura> {
    const body = JSON.stringify(cober);
    const url = this.currentApi + '/deleteCobertura/';

    return this._http.post<Cobertura>(url, body, this.httpOptions);
  }

  deleteRamo(ramo: Ramo): Observable<Ramo> {
    const body = JSON.stringify(ramo);
    const url = this.currentApi + '/deleteRamo/';

    return this._http.post<Ramo>(url, body, this.httpOptions);
  }

  // ------------------------PRODUCTO------------------------------

  deleteProducto(producto: Producto): Observable<Producto> {
    const body = JSON.stringify(producto);
    const url = this.currentApi + '/deleteProductoAseguradora/';

    return this._http.post<Producto>(url, body, this.httpOptions);
  }

  cloneProducto(cobProducto: CoberturaProducto): Observable<CoberturaProducto> {
    const body = JSON.stringify(cobProducto);
    const url = this.currentApi + '/cloneProducto/';

    return this._http.post<CoberturaProducto>(url, body, this.httpOptions);
  }

  deleteDetalleCoberturaProducto(
    coberturaProductoColumn: CoberturaProductoColumn
  ): Observable<CoberturaProductoColumn> {
    const body = JSON.stringify(coberturaProductoColumn);
    const url = this.currentApi + '/deleteDetalleCoberturaProducto/';

    return this._http.post<CoberturaProductoColumn>(
      url,
      body,
      this.httpOptions
    );
  }

  setDetalleCoberturaProductoDtl(
    coberturaProducto: CoberturaProductoColumn
  ): Observable<CoberturaProductoColumn> {
    const body = JSON.stringify(coberturaProducto);
    const url = this.currentApi + '/setCoberturaProductoDtl/';

    return this._http.post<CoberturaProductoColumn>(
      url,
      body,
      this.httpOptions
    );
  }

  getCoberturasProductoGrupo(
    producto: Producto
  ): Observable<CoberturaProductoColumn[]> {
    const body = JSON.stringify(producto);
    const url = this.currentApi + '/getCoberturasProductoGrupo/';

    return this._http.post<CoberturaProductoColumn[]>(
      url,
      body,
      this.httpOptions
    );
  }

  getCoberturasProductoColumn(
    producto: Producto
  ): Observable<CoberturaProductoColumn[]> {
    const body = JSON.stringify(producto);
    const url = this.currentApi + '/getCoberturasProductoColumn/';

    return this._http.post<CoberturaProductoColumn[]>(
      url,
      body,
      this.httpOptions
    );
  }

  getCoberturasProductoRow(
    producto: Producto
  ): Observable<CoberturaProductoRow[]> {
    const body = JSON.stringify(producto);
    const url = this.currentApi + '/getCoberturasProductoRow/';

    return this._http.post<CoberturaProductoRow[]>(url, body, this.httpOptions);
  }

  getCoberturasProducto(producto: Producto): Observable<Cobertura[]> {
    const body = JSON.stringify(producto);
    const url = this.currentApi + '/getCoberturasProducto/';

    return this._http.post<Cobertura[]>(url, body, this.httpOptions);
  }

  setCoberturaProducto(
    cobProducto: CoberturaProducto
  ): Observable<CoberturaProducto> {
    const body = JSON.stringify(cobProducto);
    const url = this.currentApi + '/setCoberturaProducto/';

    return this._http.post<CoberturaProducto>(url, body, this.httpOptions);
  }

  deleteCoberturaProducto(
    cobProducto: CoberturaProducto
  ): Observable<CoberturaProducto> {
    const body = JSON.stringify(cobProducto);
    const url = this.currentApi + '/deleteCoberturaProducto/';

    return this._http.post<CoberturaProducto>(url, body, this.httpOptions);
  }

  setCoberturaProductoNombreSeccion(
    cobProducto: CoberturaProducto
  ): Observable<CoberturaProducto> {
    const body = JSON.stringify(cobProducto);
    const url = this.currentApi + '/setCoberturaProductoNombreSeccion/';

    return this._http.post<CoberturaProducto>(url, body, this.httpOptions);
  }

  setCoberturaProductoEnSeccion(
    cobProducto: CoberturaProducto
  ): Observable<CoberturaProducto> {
    const body = JSON.stringify(cobProducto);
    const url = this.currentApi + '/setCoberturaProductoEnSeccion/';

    return this._http.post<CoberturaProducto>(url, body, this.httpOptions);
  }

    // ------------------------RAMOS------------------------------
    getRamos(param: Ramo): Observable<Ramo[]> {
      const body = JSON.stringify(param);
      const url = this.currentApi + '/getRamos/';
      return this._http.post<Ramo[]>(url, body, this.httpOptions);
    }

    setRamo(param: Ramo): Observable<Ramo> {
      const body = JSON.stringify(param);
      const url = this.currentApi + '/setRamo/';
      return this._http.post<Ramo>(url, body, this.httpOptions);
    }

    getCoberturas(param: Cobertura): Observable<Cobertura[]> {
      const body = JSON.stringify(param);
      const url = this.currentApi + '/getCoberturas/';
      return this._http.post<Cobertura[]>(url, body, this.httpOptions);
    }

    getEstadosReclamos(param: EstadoReclamo): Observable<EstadoReclamo[]> {
      const body = JSON.stringify(param);
      const url = this.currentApi + '/getEstadosReclamos/';
      return this._http.post<EstadoReclamo[]>(url, body, this.httpOptions);
    }

    subirOrdenEstado(param: EstadoReclamo): Observable<EstadoReclamo> {
      const body = JSON.stringify(param);
      const url = this.currentApi + '/subirOrdenEstado/';
      return this._http.post<EstadoReclamo>(url, body, this.httpOptions);
    }

    bajarOrdenEstado(param: EstadoReclamo): Observable<EstadoReclamo> {
      const body = JSON.stringify(param);
      const url = this.currentApi + '/bajarOrdenEstado/';
      return this._http.post<EstadoReclamo>(url, body, this.httpOptions);
    }


  // ------------------------ASEGURADORAS------------------------------
  getAseguradoras(mostrarTodos: number): Observable<Aseguradora[]> {
    const filtro = new FiltroConsulta();
    filtro.opcion_1 = mostrarTodos;
    const body = JSON.stringify(filtro);
    const url = this.currentApi + '/getAseguradoras/';
    return this._http.post<Aseguradora[]>(url, body, this.httpOptions);
  }

  getAseguradora(
    idAseguradora: number,
    mostrarTodos: number
  ): Observable<Aseguradora[]> {
    const filtro = new FiltroConsulta();
    filtro.id = idAseguradora;
    filtro.opcion_1 = mostrarTodos;
    const body = JSON.stringify(filtro);
    const url = this.currentApi + '/getAseguradoras/';
    return this._http.post<Aseguradora[]>(url, body, this.httpOptions);
  }

  setAseguradora(param: Aseguradora): Observable<Aseguradora> {
    const body = JSON.stringify(param);
    const url = this.currentApi + '/setAseguradora/';
    return this._http.post<Aseguradora>(url, body, this.httpOptions);
  }

  deleteAseguradora(id: number): Observable<Aseguradora> {
    const body = JSON.stringify(id);
    const url = this.currentApi + '/deleteAseguradora/';
    return this._http.post<Aseguradora>(url, body, this.httpOptions);
  }

  // ------------------------PRODUCTOS------------------------------
  getProductosAseguradora(param: Aseguradora): Observable<Producto[]> {
    const body = JSON.stringify(param);
    const url = this.currentApi + '/getProductosAseguradora/';
    return this._http.post<Producto[]>(url, body, this.httpOptions);
  }

  setProducto(param: Producto): Observable<Producto> {
    const body = JSON.stringify(param);
    const url = this.currentApi + '/setProductoAseguradora/';
    return this._http.post<Producto>(url, body, this.httpOptions);
  }

  // ------------------------PLANES------------------------------
  getPlanesProducto(param: Plan): Observable<Plan[]> {
    const body = JSON.stringify(param);
    const url = this.currentApi + '/getPlanes/';
    return this._http.post<Plan[]>(url, body, this.httpOptions);
  }


  setPlan(param: Plan): Observable<Plan> {
    const body = JSON.stringify(param);
    const url = this.currentApi + '/setPlan/';
    return this._http.post<Plan>(url, body, this.httpOptions);
  }

  clonePlan(param: Plan): Observable<Plan> {
    const body = JSON.stringify(param);
    const url = this.currentApi + '/clonePlan/';
    return this._http.post<Plan>(url, body, this.httpOptions);
  }




  // ------------------------CONTACTOS------------------------------
  getContactos(param: FiltroConsulta): Observable<Contacto[]> {
    const body = JSON.stringify(param);
    const url = this.currentApi + '/getContactos/';
    return this._http.post<Contacto[]>(url, body, this.httpOptions);
  }
}
