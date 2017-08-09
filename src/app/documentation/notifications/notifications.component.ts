import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showNotification(from, align) {
      const type = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];

      const color = Math.floor((Math.random() * 6) + 1);

      $.notify({
          icon: 'notifications',
          message: 'Welcome to <b>Material Dashboard</b> - a beautiful dashboard for every web developer.'
      }, {
          type: type[color],
          timer: 3000,
          placement: {
              from: from,
              align: align
          }
      });
  }
}
