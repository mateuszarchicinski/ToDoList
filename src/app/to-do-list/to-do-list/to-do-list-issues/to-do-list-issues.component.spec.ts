import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListIssue } from '../../data/to-do-list.model';
import { ToDoListIssuesComponent } from './to-do-list-issues.component';

describe('ToDoListIssuesComponent', () => {
  let component: ToDoListIssuesComponent;
  let fixture: ComponentFixture<ToDoListIssuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoListIssuesComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit updateIssueData event with proper arguments', () => {
    const spy = spyOn(component.updateIssueData, 'emit');
    const issue = {} as ToDoListIssue;

    component.updateIssueIsCheckedData(issue);

    expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({...issue, isChecked: !issue.isChecked}));
  });

  it('should not emit updateIssueData', () => {
    const spy = spyOn(component.updateIssueData, 'emit');

    component.updateIssueIsCheckedData(null);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should return proper ID taken from ToDoListIssue', () => {
    const issue = {id: 'An example id'} as ToDoListIssue;

    expect(component.trackByFn(1, issue)).toEqual(issue.id);
  });
});
