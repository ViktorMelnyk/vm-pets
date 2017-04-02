import {Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {PetsComponent} from './components/pets/pets.component'

export const appRoutes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'pets', component: PetsComponent},

  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {path: '**', component: UsersComponent}
];
