import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListIssuesComponent } from './to-do-list-issues.component';

describe('ToDoListIssuesComponent', () => {
  let component: ToDoListIssuesComponent;
  let fixture: ComponentFixture<ToDoListIssuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoListIssuesComponent]
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
});
