import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
export const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.routes').then((m) => m.homeRoutes),
      },
      {
        path: 'newArrival',
        loadChildren: () =>
          import('./pages/new-arrival/new-arrival.routes').then(
            (m) => m.newArrivalRoutes
          ),
      },
      {
        path: 'menShirts',
        loadChildren: () =>
          import('./pages/men-shirts/men-shirts.routes').then(
            (m) => m.menShirtsRoutes
          ),
      },
      {
        path: 'menPants',
        loadChildren: () =>
          import('./pages/men-pants/men-pants.routes').then(
            (m) => m.menPantsRoutes
          ),
      },
    ],
  },
];
