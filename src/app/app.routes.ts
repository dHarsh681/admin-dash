import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./pages/portal-layout/portal-layout.component').then(
        (c) => c.PortalLayoutComponent
      ),
    children: [
      {
        path: '',
        redirectTo: '/app/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/portal-layout/main-app/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
            import('./pages/portal-layout/main-app/users/users.component').then(
              (c) => c.UsersComponent
            ),
      }
    ],
  },
];
