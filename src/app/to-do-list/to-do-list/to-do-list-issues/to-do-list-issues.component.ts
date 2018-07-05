import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ToDoListIssue } from '../../data/to-do-list.model';

@Component({
  selector: 'app-to-do-list-issues',
  templateUrl: './to-do-list-issues.component.html',
  styleUrls: ['./to-do-list-issues.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListIssuesComponent {

  @Input() issuesData: ToDoListIssue[];
  @Output() updateIssueData: EventEmitter<ToDoListIssue> = new EventEmitter();
  @Output() removeIssueData: EventEmitter<number> = new EventEmitter();

  updateIssueIsCheckedData(issue: ToDoListIssue): void {
    if (issue) {
      this.updateIssueData.emit({...issue, isChecked: !issue.isChecked});
    }
  }

  trackByFn(index: number, issue: ToDoListIssue): string {
    return issue.id;
  }

}
