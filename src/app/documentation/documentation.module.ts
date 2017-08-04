import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DocumentationRoutes } from './documentation.routing';

import { TutorialComponent } from './tutorial/tutorial.component';
import { InputsComponent } from './inputs/inputs.component';
import { CustomizableSelectComponent } from './customizable-select/customizable-select.component';
import { TagsComponent } from './tags/tags.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FootersComponent } from './footers/footers.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SlidersComponent } from './sliders/sliders.component';
import { PanelsComponent } from './panels/panels.component';
import { TablesComponent } from './tables/tables.component';
import { CollapsibleGroupsComponent } from './collapsible-groups/collapsible-groups.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { DatetimePickerComponent } from './datetime-picker/datetime-picker.component';
import { ChartsComponent } from './charts/charts.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { VectorMapComponent } from './vector-map/vector-map.component';
import { WizardComponent } from './wizard/wizard.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CrsComponent } from './crs/crs.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextareaComponent } from './textarea/textarea.component';

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
        CustomizableSelectComponent,
        TagsComponent,
        NavigationComponent,
        FootersComponent,
        PaginationComponent,
        ProgressBarComponent,
        SlidersComponent,
        PanelsComponent,
        TablesComponent,
        CollapsibleGroupsComponent,
        NotificationsComponent,
        SidebarComponent,
        SweetAlertComponent,
        DatetimePickerComponent,
        ChartsComponent,
        GoogleMapsComponent,
        VectorMapComponent,
        WizardComponent,
        ButtonsComponent,
        CrsComponent,
        DropdownComponent,
        TextareaComponent
    ]
})

export class DocumentationModule {}
