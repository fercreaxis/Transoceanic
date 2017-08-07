import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DocumentationRoutes } from './documentation.routing';

import { TutorialComponent } from './tutorial/tutorial.component';
import { InputsComponent } from './inputs/inputs.component';
import { TagsComponent } from './tags/tags.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TablesComponent } from './tables/tables.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CrsComponent } from './crs/crs.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextareaComponent } from './textarea/textarea.component';
import { JasnyComponent } from './jasny/jasny.component';
import { MaterialiconsComponent } from './materialicons/materialicons.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DocumentationRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        TutorialComponent,
        InputsComponent,
        TagsComponent,
        NavigationComponent,
        TablesComponent,
        NotificationsComponent,
        SweetAlertComponent,
        DatePickerComponent,
        ButtonsComponent,
        CrsComponent,
        DropdownComponent,
        TextareaComponent,
        JasnyComponent,
        MaterialiconsComponent,
    ]
})

export class DocumentationModule {}
