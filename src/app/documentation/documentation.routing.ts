import { Routes } from '@angular/router';

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

export const DocumentationRoutes: Routes = [{
    path: '',
    children: [ {
        path: 'tutorial',
        component: TutorialComponent
    },{
        path: 'buttons',
        component: ButtonsComponent
    },{
        path: 'inputs',
        component: InputsComponent
    },{
        path: 'tags',
        component: TagsComponent
    },{
        path: 'textarea',
        component: TextareaComponent
    },{
        path: 'navigation',
        component: NavigationComponent
    },{
        path: 'tables',
        component: TablesComponent
    },{
        path: 'notifications',
        component: NotificationsComponent
    },{
        path: 'sweet-alert',
        component: SweetAlertComponent
    },{
        path: 'datepicker',
        component: DatePickerComponent
    },{
        path: 'crs',
        component: CrsComponent
    },{
        path: 'dropdown',
        component: DropdownComponent
    }]
}];
