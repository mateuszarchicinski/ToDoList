import { TestBed } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { cold } from 'jasmine-marbles';
import Spy = jasmine.Spy;

import { ToDoListIssue } from '../data/to-do-list.model';
import { ToDoListActionTypes } from './to-do-list.actions';
import { toDoListReducer } from './to-do-list.reducer';
import { ToDoListService } from './to-do-list.service';
import { toDoListIssuesMock } from '../data/to-do-list.model.mocks';

describe('ToDoListService', () => {
  let store: Store<any>;
  let storeDispatchSpy: Spy;
  let toDoListService: ToDoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({toDoList: toDoListReducer}, {
        metaReducers: [storeFreeze],
        initialState: {toDoList: {issues: toDoListIssuesMock}},
      })],
      providers: [ToDoListService],
    });

    store = TestBed.get(Store);
    storeDispatchSpy = spyOn(store, 'dispatch');
    toDoListService = TestBed.get(ToDoListService);
  });

  it('should select issues data', () => {
    expect(toDoListService.selectIssuesData()).toBeObservable(cold('a', {a: toDoListIssuesMock}));
  });

  it('should dispatch fetch issues data action', () => {
    toDoListService.fetchIssuesData();

    expect(storeDispatchSpy).toHaveBeenCalledWith({type: ToDoListActionTypes.FETCH_ISSUES_DATA});
  });

  it('should dispatch add issue data action with proper arguments', () => {
    const issue = {} as ToDoListIssue;
    toDoListService.addIssueData(issue);

    expect(storeDispatchSpy).toHaveBeenCalledWith({type: ToDoListActionTypes.ADD_ISSUE_DATA, issue});
  });

  it('should dispatch update issue data action with proper arguments', () => {
    const issue = {} as ToDoListIssue;
    toDoListService.updateIssueData(issue);

    expect(storeDispatchSpy).toHaveBeenCalledWith({type: ToDoListActionTypes.UPDATE_ISSUE_DATA, issue});
  });

  it('should dispatch remove issue data action with proper arguments', () => {
    const index = 5;
    toDoListService.removeIssueData(index);

    expect(storeDispatchSpy).toHaveBeenCalledWith({type: ToDoListActionTypes.REMOVE_ISSUE_DATA, index});
  });
});
