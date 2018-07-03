import { ToDoListIssue, ToDoListIssuesData } from './to-do-list.model';

export enum ToDoListActionTypes {
  FETCH_ISSUES_DATA = '[TODOLIST] fetch issues data action',
  UPDATE_ISSUES_DATA = '[TODOLIST] update issues data action',
  ADD_ISSUE_DATA = '[TODOLIST] add issue data action',
  REMOVE_ISSUE_DATA = '[TODOLIST] update issue data action',
  UPDATE_ISSUE_DATA = '[TODOLIST] remove issue data action',
}

export type ToDoListFetchIssuesDataAction = { type: ToDoListActionTypes.FETCH_ISSUES_DATA };
export type ToDoListUpdateIssuesDataAction = { type: ToDoListActionTypes.UPDATE_ISSUES_DATA, issues: ToDoListIssuesData };
export type ToDoListAddIssueDataAction = { type: ToDoListActionTypes.ADD_ISSUE_DATA, issue: ToDoListIssue };
export type ToDoListUpdateIssueDataAction = { type: ToDoListActionTypes.UPDATE_ISSUE_DATA, issue: ToDoListIssue };
export type ToDoListRemoveIssueDataAction = { type: ToDoListActionTypes.REMOVE_ISSUE_DATA, issue: ToDoListIssue };

export type ToDoListAction = null
  | ToDoListFetchIssuesDataAction
  | ToDoListUpdateIssuesDataAction
  | ToDoListAddIssueDataAction
  | ToDoListUpdateIssueDataAction
  | ToDoListRemoveIssueDataAction;
