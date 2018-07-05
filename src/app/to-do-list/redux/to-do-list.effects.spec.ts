import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { cold, hot } from 'jasmine-marbles';
import Spy = jasmine.Spy;

import { ToDoListActionTypes } from './to-do-list.actions';
import { ToDoListService } from './to-do-list.service';
import { ToDoListEffects } from './to-do-list.effects';
import { ToDoListDataService } from '../data/to-do-list.data.service';
import { toDoListIssuesMocked } from '../data/to-do-list.model.mocks';

describe('ToDoListEffects', () => {
  let toDoListService: ToDoListService;
  let toDoListDataService: ToDoListDataService;

  function createEffects(actions: Actions<Action>): ToDoListEffects {
    return new ToDoListEffects(
      actions,
      toDoListService,
      toDoListDataService,
    );
  }

  beforeEach(() => {
    toDoListService = jasmine.createSpyObj('toDoListService', Object.keys(ToDoListService.prototype));
    toDoListDataService = jasmine.createSpyObj('toDoListDataService', Object.keys(ToDoListDataService.prototype));
  });

  it('should dispatch action to update issues data', () => {
    const issues = [toDoListIssuesMocked()];
    (toDoListDataService.fetchIssuesData as Spy).and.returnValue(cold('a', {a: issues}));
    const actions = new Actions(hot('-a', {a: {type: ToDoListActionTypes.FETCH_ISSUES_DATA}}));

    const effects = createEffects(actions);

    expect(effects.fetchIssuesData$).toBeObservable(hot('-a', {
      a: {type: ToDoListActionTypes.UPDATE_ISSUES_DATA, issues},
    }));
  });

  it('should dispatch action to update issues data after add issue action', () => {
    const issue = toDoListIssuesMocked();
    const issues = [issue];
    (toDoListService.selectIssuesData as Spy).and.returnValue(hot('a', {a: issues}));
    (toDoListDataService.updateIssuesData as Spy).and.returnValue(cold('-a', {a: issues}));
    const actions = new Actions(hot('-a', {a: {type: ToDoListActionTypes.ADD_ISSUE_DATA, issue}}));

    const effects = createEffects(actions);

    expect(effects.updateIssuesData$).toBeObservable(hot('--a', {
      a: {type: ToDoListActionTypes.UPDATE_ISSUES_DATA, issues},
    }));
  });
});
