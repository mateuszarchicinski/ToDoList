import { Component } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

import { ToDoListService } from '../redux/to-do-list.service';
import { ToDoListIssue } from '../redux/to-do-list.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
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
