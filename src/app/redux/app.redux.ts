import { NgModule } from '@angular/core';

import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ToDoListState } from '../to-do-list/redux/to-do-list.model';
import { toDoListReducer } from '../to-do-list/redux/to-do-list.reducer';
import { ToDoListService } from '../to-do-list/redux/to-do-list.service';
import { ToDoListEffects } from '../to-do-list/redux/to-do-list.effects';
import { ToDoListDataService } from '../to-do-list/data/to-do-list.data.service';

export interface State {
  toDoList: ToDoListState;
}

const reducers: ActionReducerMap<State> = {
  toDoList: toDoListReducer,
};

const effects = [
  ToDoListEffects,
];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {metaReducers: [storeFreeze]}),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [
    ToDoListService,
    ToDoListDataService,
  ]
})
export class AppReduxModule {
}
