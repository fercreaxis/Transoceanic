import { Router } from '@angular/router';
import { AuxiliarService } from './../lib/auxiliar.service';
import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

// Metadata
export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Inicio',
    type: 'link',
    icontype: 'insert_chart_outlined',
  },
  {
    path: '/adm',
    title: 'Adm',
    type: 'sub',
    icontype: 'account_balance',
    collapse: 'adm',
    children: [
      { path: 'aseguradoras', title: 'Aseguradoras', ab: 'AS' },
      { path: 'ramos', title: 'Ramos', ab: 'RA' },
      { path: 'polizas', title: 'Polizas', ab: 'PO' },
      { path: 'vendedores', title: 'Vendedores', ab: 'VE' },
    ],
  },
  {
    path: '/crm',
    title: 'Crm',
    type: 'sub',
    icontype: 'people',
    collapse: 'crm',
    children: [
      { path: 'contactos', title: 'Contactos', ab: 'Con' },
      { path: 'calendario', title: 'Cumpleañeros', ab: 'Cal' },
    ],
  },
  {
    path: '/ope',
    title: 'Ope',
    type: 'sub',
    icontype: 'assignment',
    collapse: 'ope',
    children: [{ path: 'reclamos', title: 'Reclamos', ab: 'AS' }],
  },
];
@Component({
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ps: any;

  constructor(public auxiliar: AuxiliarService,
    public router: Router) {}

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemSidebar = <HTMLElement>(
        document.querySelector('.sidebar .sidebar-wrapper')
      );
      this.ps = new PerfectScrollbar(elemSidebar);
    }
  }
  updatePS(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      this.ps.update();
    }
  }
  isMac(): boolean {
    let bool = false;
    if (
      navigator.platform.toUpperCase().indexOf('MAC') >= 0 ||
      navigator.platform.toUpperCase().indexOf('IPAD') >= 0
    ) {
      bool = true;
    }
    return bool;
  }

  logout() {
    this.auxiliar.logout();
    this.router.navigateByUrl('/pages/login');
}

}
