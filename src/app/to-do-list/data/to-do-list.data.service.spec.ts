import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ToDoListIssuesData } from './to-do-list.model';
import { API_URL } from '../../api/api';
import { ToDoListDataService } from './to-do-list.data.service';
import { toDoListIssuesDataMock } from './to-do-list.model.mocks';

describe('ToDoListDataService', () => {
  let httpMock: HttpTestingController;
  let toDoListDataService: ToDoListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        {provide: API_URL, useValue: ''},
        ToDoListDataService,
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    toDoListDataService = TestBed.get(ToDoListDataService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(toDoListDataService).toBeTruthy();
  });

  it('should fetch issues data', () => {
    let issues: ToDoListIssuesData;

    toDoListDataService.fetchIssuesData().subscribe(v => issues = v);
    const req = httpMock.expectOne('issues.json');
    req.flush(toDoListIssuesDataMock);

    expect(req.request.url).toEqual('issues.json');
    expect(req.request.method).toEqual('GET');
    expect(issues).toEqual(toDoListIssuesDataMock);
  });

  it('should update issues data', () => {
    let issues: ToDoListIssuesData;

    toDoListDataService.updateIssuesData(toDoListIssuesDataMock).subscribe(v => issues = v);
    const req = httpMock.expectOne('issues.json');
    req.flush(toDoListIssuesDataMock);

    expect(req.request.url).toEqual('issues.json');
    expect(req.request.method).toEqual('PUT');
    expect(issues).toEqual(toDoListIssuesDataMock);
  });
});
