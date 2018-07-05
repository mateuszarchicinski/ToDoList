import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { hot } from 'jasmine-marbles';

import { ToDoListIssue } from '../data/to-do-list.model';
import { API_URL } from '../../api/api';
import { AppCommonModule } from '../../common/app-common.module';
import { AppReduxModule } from '../../redux/app.redux';
import { ToDoListService } from '../redux/to-do-list.service';
import { ToDoListModule } from '../to-do-list.module';
import { ToDoListComponent } from './to-do-list.component';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;
  let toDoListService: ToDoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppCommonModule,
        AppReduxModule,
        ToDoListModule,
      ],
      providers: [
        {
          provide: API_URL,
          useValue: '',
        }
      ]
    });

    toDoListService = TestBed.get(ToDoListService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return issues data as observable', () => {
    spyOn(toDoListService, 'selectIssuesData').and.returnValue(hot('a', {a: null}));

    expect(component.issuesData$).toBeObservable(hot('a', {a: null}));
  });

  it('should call method addIssueData', () => {
    const spy = spyOn(toDoListService, 'addIssueData');
    const issue = {} as ToDoListIssue;

    toDoListService.addIssueData(issue);

    expect(spy).toHaveBeenCalledWith(issue);
  });

  it('should call method updateIssueData', () => {
    const spy = spyOn(toDoListService, 'updateIssueData');
    const issue = {} as ToDoListIssue;

    toDoListService.updateIssueData(issue);

    expect(spy).toHaveBeenCalledWith(issue);
  });

  it('should call method removeIssueData', () => {
    const spy = spyOn(toDoListService, 'removeIssueData');
    const index = 5;

    toDoListService.removeIssueData(index);

    expect(spy).toHaveBeenCalledWith(index);
  });
});
