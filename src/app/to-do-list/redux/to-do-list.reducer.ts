import { v4 as uuid } from 'uuid';

import { ToDoListState } from './to-do-list.model';
import { ToDoListAction, ToDoListActionTypes } from './to-do-list.actions';

export const initialState: ToDoListState = {
  issues: null,
};

export function toDoListReducer(state: ToDoListState = initialState, action?: ToDoListAction): ToDoListState {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case ToDoListActionTypes.UPDATE_ISSUES_DATA: {
      return {
        ...state,
        issues: Object.keys(action.issues || {}).reduce((prev, currKey) => ([...prev, {id: currKey, ...action.issues[currKey]}]), []),
      };
    }
    case ToDoListActionTypes.ADD_ISSUE_DATA: {
      return {
        ...state,
        issues: [...state.issues, {id: uuid(), ...action.issue}],
      };
    }
    case ToDoListActionTypes.UPDATE_ISSUE_DATA: {
      const newIssues = (state.issues || []).slice();
      const index = newIssues.findIndex(i => i.id === action.issue.id);
      const issue = newIssues[index];
      newIssues[index] = {...issue, isChecked: !issue.isChecked};
      return {
        ...state,
        issues: newIssues,
      };
    }
    case ToDoListActionTypes.REMOVE_ISSUE_DATA: {
      const newIssues = (state.issues || []).slice();
      const index = newIssues.findIndex(i => i.id === action.issue.id);
      newIssues.splice(index, 1);
      return {
        ...state,
        issues: newIssues,
      };
    }
    default: {
      return state;
    }
  }
}
