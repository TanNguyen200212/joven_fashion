import { Routes } from '@angular/router';
import { MenShirtsComponent } from './men-shirts.component';

export const menShirtsRoutes: Routes = [
  {
    path: '',
    component: MenShirtsComponent,
  },
  // {
  //   path: 'users',
  //   loadChildren: () =>
  //     import('./users/users.routes').then((m) => m.usersRoutes),
  // },
];
