import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavItem, NavItemType } from '../../lbd/lbd.module';

@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html'
})

export class AdminLayoutComponent implements OnInit {
    public navItems: NavItem[];

    constructor() {}
    ngOnInit() {
        this.navItems = [
          { type: NavItemType.NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },

          {
            type: NavItemType.NavbarRight,
            title: '',
            iconClass: 'fa fa-bell-o',
            numNotifications: 5,
            dropdownItems: [
              { title: 'Notification 1' },
              { title: 'Notification 2' },
              { title: 'Notification 3' },
              { title: 'Notification 4' },
              { title: 'Another Notification' }
            ]
          },
          {
            type: NavItemType.NavbarRight,
            title: '',
            iconClass: 'fa fa-list',

            dropdownItems: [
              { iconClass: "pe-7s-mail", title: 'Messages' },
              { iconClass: "pe-7s-help1", title: 'Help Center' },
              { iconClass: "pe-7s-tools", title: 'Settings' },
               'separator',
              { iconClass: "pe-7s-lock", title: 'Lock Screen' },
              { iconClass: "pe-7s-close-circle", title: 'Log Out' }
            ]
          },
          { type: NavItemType.NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },

          { type: NavItemType.NavbarLeft, title: 'Account' },
          {
            type: NavItemType.NavbarLeft,
            title: 'Dropdown',
            dropdownItems: [
              { title: 'Action' },
              { title: 'Another action' },
              { title: 'Something' },
              { title: 'Another action' },
              { title: 'Something' },
              'separator',
              { title: 'Separated link' },
            ]
          },
          { type: NavItemType.NavbarLeft, title: 'Log out' }
        ];
    }
}
