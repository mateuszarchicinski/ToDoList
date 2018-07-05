import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { API_URL } from '../../api/api';
import { ToDoListIssuesData } from './to-do-list.model';

@Injectable()
export class ToDoListDataService {

  constructor(private httpClient: HttpClient,
              @Inject(API_URL) private apiUrl: string) {
  }

  fetchIssuesData(): Observable<ToDoListIssuesData> {
    return this.httpClient.get<ToDoListIssuesData>(`${this.apiUrl}issues.json`);
  }

  updateIssuesData(issues: ToDoListIssuesData): Observable<ToDoListIssuesData> {
    return this.httpClient.put<ToDoListIssuesData>(`${this.apiUrl}issues.json`, issues);
  }

}
