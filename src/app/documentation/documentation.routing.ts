import { Routes } from '@angular/router';

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

export const DocumentationRoutes: Routes = [{
    path: '',
    children: [ {
        path: 'tutorial',
        component: TutorialComponent
    },{
        path: 'buttons',
        component: ButtonsComponent
    },{
        path: 'charts',
        component: ChartsComponent
    },{
        path: 'inputs',
        component: InputsComponent
    },{
        path: 'customizable-select',
        component: CustomizableSelectComponent
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
        path: 'footers',
        component: FootersComponent
    },{
        path: 'pagination',
        component: PaginationComponent
    },{
        path: 'progress-bar',
        component: ProgressBarComponent
    },{
        path: 'sliders',
        component: SlidersComponent
    },{
        path: 'panels',
        component: PanelsComponent
    },{
        path: 'tables',
        component: TablesComponent
    },{
        path: 'collapsible-groups',
        component: CollapsibleGroupsComponent
    },{
        path: 'notifications',
        component: NotificationsComponent
    },{
        path: 'sidebar',
        component: SidebarComponent
    },{
        path: 'sweet-alert',
        component: SweetAlertComponent
    },{
        path: 'datetimepicker',
        component: DatetimePickerComponent
    },{
        path: 'google',
        component: GoogleMapsComponent
    },{
        path: 'vector',
        component: VectorMapComponent
    },{
        path: 'wizard',
        component: WizardComponent
    },{
        path: 'crs',
        component: CrsComponent
    },{
        path: 'dropdown',
        component: DropdownComponent
    }]
}];
