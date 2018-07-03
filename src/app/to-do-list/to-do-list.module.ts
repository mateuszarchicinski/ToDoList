import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppCommonModule } from '../common/app-common.module';
import { ToDoListRoutingModule } from './routing/to-do-list-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoListFormComponent } from './to-do-list/to-do-list-form/to-do-list-form.component';
import { ToDoListIssuesComponent } from './to-do-list/to-do-list-issues/to-do-list-issues.component';

@NgModule({
  declarations: [
    ToDoListComponent,
    ToDoListFormComponent,
    ToDoListIssuesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppCommonModule,
    ToDoListRoutingModule,
  ],
  providers: []
})
export class ToDoListModule {
}
