import { Routes } from '@angular/router';
import { AuthGuard } from './lib/auth.guard';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: '',
      component: AdminLayoutComponent,
      children: [
        {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
        }, {
            path: 'adm',
            loadChildren: './sistema/adm/adm.module#AdmModule',
            canActivate: [AuthGuard]
        }, {
          path: 'crm',
          loadChildren: './sistema/crm/crm.module#CrmModule',
          canActivate: [AuthGuard]
      }
      ]},
    {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
