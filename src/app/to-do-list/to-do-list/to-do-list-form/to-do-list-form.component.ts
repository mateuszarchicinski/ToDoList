import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToDoListIssue } from '../../redux/to-do-list.model';

@Component({
  selector: 'app-to-do-list-form',
  templateUrl: './to-do-list-form.component.html',
  styleUrls: ['./to-do-list-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListFormComponent implements OnInit {

  @Output() addIssueData: EventEmitter<ToDoListIssue> = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  handleFormSubmit(): void {
    if (this.form && this.form.valid) {
      this.addIssueData.emit({
        ...this.form.value,
        date: new Date(),
      });
    }
  }

  ngOnInit(): void {
    this.form = this.createForm();
  }

}
