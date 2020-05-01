import { Login } from './../../_models/login.model';
import { Router } from '@angular/router';
import { AuxiliarService } from './../../lib/auxiliar.service';
import { Component, OnInit, ElementRef, OnDestroy, isDevMode } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-login-cmp',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  private toggleButton: any;
  private sidebarVisible: boolean;
  private nativeElement: Node;

  usuario = '';
  clave = '';
  loading = false;

  constructor(
    private element: ElementRef,
    private auxiliar: AuxiliarService,
    private router: Router
  ) {
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;

    if (isDevMode()) {
      auxiliar.currentApi = auxiliar.devApi;
      auxiliar.currentLocalStorage = 'DevCorrLoginData';
    } else {
      auxiliar.currentApi = auxiliar.serverApi;
      auxiliar.currentLocalStorage = 'CorrLoginData';
    }

  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    body.classList.add('off-canvas-sidebar');
    const card = document.getElementsByClassName('card')[0];
    setTimeout(function () {
      // after 1000 ms we add the class animated to the login/register card
      card.classList.remove('card-hidden');
    }, 700);
  }
  sidebarToggle() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    const sidebar = document.getElementsByClassName('navbar-collapse')[0];
    if (this.sidebarVisible === false) {
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
    body.classList.remove('off-canvas-sidebar');
  }

  // Metodos Adicionados
  login() {
    this.loading = true;
    const l = new Login();

    l.username = this.usuario;
    l.password = this.clave;

    this.auxiliar.validarLogin(l).subscribe(
      (results) => {
        this.loading = false;
        const retorno: Login = results;
        retorno.username = this.usuario;
        if (this.auxiliar.inicializarLogin(retorno)) {
          this.router.navigateByUrl('/dashboard');
        }
      },
      (error) => {
        this.auxiliar.msgErrorDB('Error', error);
      }
    );
  }
}
