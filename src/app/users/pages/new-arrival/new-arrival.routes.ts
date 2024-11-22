import { Routes } from '@angular/router';
import { NewArrivalComponent } from './new-arrival.component';
export const newArrivalRoutes: Routes = [

  {
    path: '',
    component: NewArrivalComponent,
  },
  // {
  //   path: 'users',
  //   loadChildren: () =>
  //     import('./users/users.routes').then((m) => m.usersRoutes),
  // },

];
