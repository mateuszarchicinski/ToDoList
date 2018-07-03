import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

import { ToDoListService } from '../to-do-list/redux/to-do-list.service';

@Injectable()
export class ToDoListPrefetchGuard implements CanActivate {

  constructor(private toDoListService: ToDoListService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.toDoListService.selectIssuesData().pipe(
      tap(issues => !issues && this.toDoListService.fetchIssuesData()),
      filter(Boolean),
      map(Boolean),
    );
  }

}
