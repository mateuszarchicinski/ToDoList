export interface ToDoListState {
  issues: ToDoListIssue[];
}

export interface ToDoListIssue {
  id: string;
  name: string;
  description: string;
  date: Date;
  isChecked?: boolean;
}

export interface ToDoListIssuesData {
  [key: string]: Partial<ToDoListIssue>;
}
