import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ToDoListIssue, ToDoListState } from './to-do-list.model';
import { ToDoListActionTypes } from './to-do-list.actions';

@Injectable()
export class ToDoListService {

  constructor(private store: Store<{ toDoList: ToDoListState }>) {
  }

  fetchIssuesData(): void {
    this.store.dispatch({type: ToDoListActionTypes.FETCH_ISSUES_DATA});
  }

  addIssueData(issue: ToDoListIssue): void {
    this.store.dispatch({type: ToDoListActionTypes.ADD_ISSUE_DATA, issue});
  }

  updateIssueData(issue: ToDoListIssue): void {
    this.store.dispatch({type: ToDoListActionTypes.UPDATE_ISSUE_DATA, issue});
  }

  removeIssueData(issue: ToDoListIssue): void {
    this.store.dispatch({type: ToDoListActionTypes.REMOVE_ISSUE_DATA, issue});
  }

  selectIssuesData(): Observable<ToDoListIssue[]> {
    return this.store.select(s => s.toDoList.issues);
  }

}
