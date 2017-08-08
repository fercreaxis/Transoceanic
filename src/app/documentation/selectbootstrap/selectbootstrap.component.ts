import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-selectbootstrap',
  templateUrl: './selectbootstrap.component.html',
  styleUrls: ['./selectbootstrap.component.css']
})
export class SelectbootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      //  Init Bootstrap Select Picker
      if ($('.selectpicker').length !== 0) {
          $('.selectpicker').selectpicker();
      }
  }
}
