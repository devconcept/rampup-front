import {Component, OnInit, Output, EventEmitter, Input, ViewChild} from '@angular/core';
import {tap} from 'rxjs/operators';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ApiService} from '../../services';
import {ApiTodoItem} from '../../models';

const {required} = Validators;

@UntilDestroy()
@Component({
  selector: 'app-create-todo-view',
  templateUrl: './create-todo-view.component.html',
  styleUrls: ['./create-todo-view.component.scss']
})
export class CreateTodoViewComponent implements OnInit {
  @Input() layout: 'horizontal' | 'vertical' = 'horizontal';
  @Output() itemCreated = new EventEmitter<ApiTodoItem>();
  @ViewChild('form', {static: true}) private formDirective: NgForm;
  dialogConfig = {$implicit: 'vertical', layout: 'vertical'};
  addItemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.addItemForm = this.fb.group({
      text: this.fb.control('', [required]),
    });
  }

  addTodo(): void {
    this.api.addTodo(this.addItemForm.controls.text.value).pipe(
      tap(item => {
        this.snackBar.open(`The item was created with id ${item.id}`);
        this.itemCreated.next(item);
        this.formDirective.resetForm();
      }),
      untilDestroyed(this),
    ).subscribe();
  }
}
