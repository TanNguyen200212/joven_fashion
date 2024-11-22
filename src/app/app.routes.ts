import { Routes } from '@angular/router';
export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/users/newArrival',
    pathMatch: 'full',
  },

  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.routes').then((m) => m.usersRoutes),
  },
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.adminRoutes),
  },
];
