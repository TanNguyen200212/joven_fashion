import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
export const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'newArrival',
        loadChildren: () =>
          import('./pages/new-arrival/new-arrival.routes').then(
            (m) => m.newArrivalRoutes
          ),
      },
    ],
  },
];
