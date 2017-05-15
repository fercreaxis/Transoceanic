import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import * as Ps from 'perfect-scrollbar';

declare var $:any;
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{
    ngOnInit(){
        // Ps.initialize($("body"));
        $.material.init();
    }
}
