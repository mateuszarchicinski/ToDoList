import { TestBed } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { of } from 'rxjs/internal/observable/of';
import { cold, hot } from 'jasmine-marbles';

import { ToDoListService } from '../to-do-list/redux/to-do-list.service';
import { ToDoListPrefetchGuard } from './to-do-list.prefetch.guard';

describe('ToDoListPrefetchGuard', () => {
  let toDoListService: ToDoListService;
  let toDoListPrefetchGuard: ToDoListPrefetchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: Store, useValue: {select: () => of(), dispatch: () => of()}},
        ToDoListService,
        ToDoListPrefetchGuard,
      ]
    });

    toDoListService = TestBed.get(ToDoListService);
    toDoListPrefetchGuard = TestBed.get(ToDoListPrefetchGuard);
  });

  it('should not allow to enter the route', () => {
    const spy = spyOn(toDoListService, 'selectIssuesData');
    spy.and.returnValue(cold('a', {a: null}));

    expect(toDoListPrefetchGuard.canActivate(null, null)).toBeObservable(hot('-'));
    expect(spy).toHaveBeenCalled();
  });

  it('should allow to enter the route', () => {
    spyOn(toDoListService, 'selectIssuesData').and.returnValue(cold('a', {a: []}));

    expect(toDoListPrefetchGuard.canActivate(null, null)).toBeObservable(hot('a', {
      a: true
    }));
  });

  it('should allow to enter the route after fetching issues data', () => {
    spyOn(toDoListService, 'selectIssuesData').and.returnValue(cold('ab', {a: null, b: []}));

    expect(toDoListPrefetchGuard.canActivate(null, null)).toBeObservable(hot('-b', {
      b: true
    }));
  });
});
