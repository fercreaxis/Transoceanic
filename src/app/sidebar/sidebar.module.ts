import { MatIconModule } from '@angular/material/icon';
import { AuxiliarService } from './../lib/auxiliar.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

@NgModule({
    imports: [ RouterModule, CommonModule, MatIconModule ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {

}
