import { ToDoListIssue, ToDoListIssuesData } from './to-do-list.model';

export const toDoListIssuesDataMock: ToDoListIssuesData = {
  1: {
    name: 'name1',
    date: new Date(),
    description: 'desc1',
  },
  2: {
    name: 'name2',
    date: new Date(),
    description: 'desc2',
  }
};

export const toDoListIssuesMock: ToDoListIssue[] = [
  {
    id: '1',
    name: 'name1',
    date: new Date(),
    description: 'desc1',
  },
  {
    id: '2',
    name: 'name2',
    date: new Date(),
    description: 'desc2',
  }
];
