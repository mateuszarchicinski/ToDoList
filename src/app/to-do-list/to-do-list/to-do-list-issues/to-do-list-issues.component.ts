import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ToDoListIssue } from '../../redux/to-do-list.model';

@Component({
  selector: 'app-to-do-list-issues',
  templateUrl: './to-do-list-issues.component.html',
  styleUrls: ['./to-do-list-issues.component.css']
})
export class ToDoListIssuesComponent {

  @Input() issuesData: ToDoListIssue[];
  @Output() updateIssueData: EventEmitter<ToDoListIssue> = new EventEmitter();
  @Output() removeIssueData: EventEmitter<ToDoListIssue> = new EventEmitter();

  trackByFn(index: number, issue: ToDoListIssue): string {
    return issue.id;
  }

}
