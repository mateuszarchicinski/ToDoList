import { ToDoListState } from '../data/to-do-list.model';
import { ToDoListActionTypes } from './to-do-list.actions';
import { initialState, toDoListReducer } from './to-do-list.reducer';
import { toDoListIssuesDataMock, toDoListIssuesMock, toDoListIssuesMocked } from '../data/to-do-list.model.mocks';

describe('toDoListReducer', () => {
  const state: ToDoListState = toDoListReducer();

  it('should create initial state', () => {
    expect(state).toEqual(initialState);
  });

  it('should not modify initial state', () => {
    const newState = toDoListReducer(state, {} as any);

    expect(newState).toEqual(state);
  });

  it('should update issues data', () => {
    const stateWithIssues = toDoListReducer(state, {
      type: ToDoListActionTypes.UPDATE_ISSUES_DATA, issues: toDoListIssuesDataMock,
    });

    expect(stateWithIssues.issues).toEqual(toDoListIssuesMock);

    const stateWithoutIssues = toDoListReducer(state, {
      type: ToDoListActionTypes.UPDATE_ISSUES_DATA, issues: null,
    });

    expect(stateWithoutIssues.issues).toEqual([]);
  });

  it('should add issue data', () => {
    const issue = toDoListIssuesMocked(1);
    const newState = toDoListReducer(state, {
      type: ToDoListActionTypes.ADD_ISSUE_DATA, issue,
    });

    expect(newState.issues).toEqual(jasmine.arrayContaining([issue]));
  });

  it('should update issue data', () => {
    const oldIssue = toDoListIssuesMocked(1);
    const newIssue = {...oldIssue, name: 'An example name!'};
    const oldState = toDoListReducer(state, {
      type: ToDoListActionTypes.ADD_ISSUE_DATA, issue: oldIssue,
    });
    const newState = toDoListReducer(oldState, {
      type: ToDoListActionTypes.UPDATE_ISSUE_DATA, issue: newIssue,
    });

    expect(newState.issues).toEqual(jasmine.arrayContaining([newIssue]));
  });

  it('should not update issue data if an issue doesn\'t exist', () => {
    const issue = toDoListIssuesMocked(1);
    const newState = toDoListReducer(state, {
      type: ToDoListActionTypes.UPDATE_ISSUE_DATA, issue,
    });

    expect(newState.issues).not.toEqual(jasmine.arrayContaining([issue]));
  });

  it('should remove issue data', () => {
    const issue = toDoListIssuesMocked(1);
    const oldState = toDoListReducer(state, {
      type: ToDoListActionTypes.ADD_ISSUE_DATA, issue,
    });
    const index = oldState.issues.findIndex(i => i.id === issue.id);
    const newState = toDoListReducer(oldState, {
      type: ToDoListActionTypes.REMOVE_ISSUE_DATA, index,
    });

    expect(newState.issues).not.toEqual(jasmine.arrayContaining([issue]));
  });
});
