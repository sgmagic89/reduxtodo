import { Routes, RouterModule } from '@angular/router';
import { MytodosComponent } from './containers/mytodos/mytodos.component';
import { ManagetodoComponent } from './containers/managetodo/managetodo.component';

export const routes: Routes = [
  {
    path: '',
    component: MytodosComponent
  },
  {
    path: 'mytodos',
    component: MytodosComponent
  },
  {
    path: 'add',
    component: ManagetodoComponent
  },
  {
    path: 'edit/:id',
    component: ManagetodoComponent
  },
  {
    path: '**',
    component: MytodosComponent
  },
];
