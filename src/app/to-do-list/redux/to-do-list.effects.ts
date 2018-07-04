import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import {
  ToDoListActionTypes,
  ToDoListAddIssueDataAction,
  ToDoListFetchIssuesDataAction,
  ToDoListRemoveIssueDataAction,
  ToDoListUpdateIssueDataAction,
} from './to-do-list.actions';
import { ToDoListService } from './to-do-list.service';
import { ToDoListDataService } from '../data/to-do-list.data.service';

@Injectable()
export class ToDoListEffects {

  constructor(private actions$: Actions,
              private toDoListService: ToDoListService,
              private toDoListDataService: ToDoListDataService) {
  }

  @Effect() fetchIssuesData$ = this.actions$.ofType<ToDoListFetchIssuesDataAction>(ToDoListActionTypes.FETCH_ISSUES_DATA).pipe(
    switchMap(() => this.toDoListDataService.fetchIssuesData().pipe(
      map(issues => ({type: ToDoListActionTypes.UPDATE_ISSUES_DATA, issues})),
    )),
  );

  @Effect() updateIssuesData$ = this.actions$.ofType<ToDoListAddIssueDataAction | ToDoListUpdateIssueDataAction | ToDoListRemoveIssueDataAction>(
    ToDoListActionTypes.ADD_ISSUE_DATA,
    ToDoListActionTypes.UPDATE_ISSUE_DATA,
    ToDoListActionTypes.REMOVE_ISSUE_DATA,
  ).pipe(
    withLatestFrom(this.toDoListService.selectIssuesData()),
    map(([_, issues]) => issues.reduce((prev, currIssue) => ({
      ...prev,
      [currIssue.id]: {
        name: currIssue.name,
        date: currIssue.date,
        description: currIssue.description,
        isChecked: currIssue.isChecked,
      },
    }), {})),
    switchMap(issuesToSave => this.toDoListDataService.updateIssuesData(issuesToSave).pipe(
      map(issues => ({type: ToDoListActionTypes.UPDATE_ISSUES_DATA, issues})),
    )),
  );

}
