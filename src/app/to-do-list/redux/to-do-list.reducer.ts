import { v4 as uuid } from 'uuid';

import { ToDoListState } from '../data/to-do-list.model';
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
        issues: Object.keys(action.issues || {})
          .reduce((prev, currKey) => ([...prev, {id: currKey, ...action.issues[currKey]}]), [])
          .sort((a, b) => {
            const firstDateTime = new Date(a.date).getTime();
            const secondDateTime = new Date(b.date).getTime();
            return firstDateTime - secondDateTime;
          }),
      };
    }
    case ToDoListActionTypes.ADD_ISSUE_DATA: {
      return {
        ...state,
        issues: [...(state.issues || []), {id: uuid(), ...action.issue}],
      };
    }
    case ToDoListActionTypes.UPDATE_ISSUE_DATA: {
      const newIssues = (state.issues || []).slice();
      const updatedIssue = action.issue;
      const index = newIssues.findIndex(i => i.id === (updatedIssue && updatedIssue.id));
      const oldIssue = newIssues[index];
      if (oldIssue) {
        newIssues[index] = {...oldIssue, ...updatedIssue};
      }
      return {
        ...state,
        issues: newIssues,
      };
    }
    case ToDoListActionTypes.REMOVE_ISSUE_DATA: {
      const newIssues = (state.issues || []).slice();
      newIssues.splice(action.index, 1);
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
