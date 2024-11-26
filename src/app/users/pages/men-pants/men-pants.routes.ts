import { Routes } from '@angular/router';
import { MenPantsComponent } from './men-pants.component';

export const menPantsRoutes: Routes = [
  {
    path: '',
    component: MenPantsComponent,
  },
  // {
  //   path: 'users',
  //   loadChildren: () =>
  //     import('./users/users.routes').then((m) => m.usersRoutes),
  // },
];
