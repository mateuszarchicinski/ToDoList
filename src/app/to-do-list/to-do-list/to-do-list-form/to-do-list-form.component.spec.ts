import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ToDoListFormComponent } from './to-do-list-form.component';

describe('ToDoListFormComponent', () => {
  let component: ToDoListFormComponent;
  let fixture: ComponentFixture<ToDoListFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ToDoListFormComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit add issue data event with proper arguments', () => {
    const spy = spyOn(component.addIssueData, 'emit');
    const value = {name: 'An example name', description: 'An example description'};
    component.form.patchValue(value);

    component.handleFormSubmit();

    expect(spy).toHaveBeenCalledWith(jasmine.objectContaining(value));
  });

  it('should not emit add issue data event', () => {
    const spy = spyOn(component.addIssueData, 'emit');
    const value = {name: null, description: 'An example description'};
    component.form.patchValue(value);

    component.handleFormSubmit();

    expect(spy).not.toHaveBeenCalled();
  });
});
