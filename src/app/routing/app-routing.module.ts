import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToDoListPrefetchGuard } from './to-do-list.prefetch.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'to-do-list',
    pathMatch: 'full',
  },
  {
    path: 'to-do-list',
    loadChildren: '../to-do-list/to-do-list.module#ToDoListModule',
    canActivate: [
      ToDoListPrefetchGuard,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ToDoListPrefetchGuard,
  ]
})
export class AppRoutingModule {
}
