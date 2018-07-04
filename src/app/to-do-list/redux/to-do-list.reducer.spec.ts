import { ToDoListState } from './to-do-list.model';
import { ToDoListActionTypes } from './to-do-list.actions';
import { initialState, toDoListReducer } from './to-do-list.reducer';
import { toDoListIssuesDataMock, toDoListIssuesMock } from './to-do-list.model.mocks';

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
    const newState = toDoListReducer(state, {
      type: ToDoListActionTypes.UPDATE_ISSUES_DATA, issues: toDoListIssuesDataMock,
    });

    expect(state).toEqual(initialState);
    expect(newState.issues).toEqual(toDoListIssuesMock);
  });
});
