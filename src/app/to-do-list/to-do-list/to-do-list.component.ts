import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

import { ToDoListIssue } from '../data/to-do-list.model';
import { ToDoListService } from '../redux/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent {

  constructor(private toDoListService: ToDoListService) {
  }

  get issuesData$(): Observable<ToDoListIssue[]> {
    return this.toDoListService.selectIssuesData();
  }

  handleAddIssueData(issue: ToDoListIssue): void {
    this.toDoListService.addIssueData(issue);
  }

  handleUpdateIssueData(issue: ToDoListIssue): void {
    this.toDoListService.updateIssueData(issue);
  }

  handleRemoveIssueData(index: number): void {
    this.toDoListService.removeIssueData(index);
  }

}
