import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {interval, Subject, Observable, of, ErrorObserver, merge} from 'rxjs';
import {takeUntil, tap, catchError, switchMap, mergeMap, finalize} from 'rxjs/operators';

import {ApiService} from '../../services';
import {ApiTodoItem, TodoItem} from '../../models';
import {ErrorService} from '@shared/services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss'],
})
export class TodoListPageComponent implements OnInit, OnDestroy {
  private $destroy = new Subject();
  private $operation = new Subject();
  private dialogRef: MatDialogRef<any>;
  @ViewChild('createItemDialog', {static: true}) private dialogTemplate: TemplateRef<any>;
  dialogConfig = {$implicit: 'vertical', layout: 'vertical'};
  todos: TodoItem[];
  displayedColumns: string[] = ['id', 'text', 'created', 'actions'];
  error = false;
  handleError: ErrorObserver<any>;
  loaded = false;

  constructor(
    private api: ApiService,
    public dialog: MatDialog,
    public errorService: ErrorService,
  ) {
  }

  ngOnInit(): void {
    this.loadData();
    this.startPooling();
    this.handleError = this.errorService.createErrorHandler((err: any) => console.log(err));
  }

  private startPooling(): void {
    interval(1000).pipe(
      switchMap(() => this.updateItems().pipe(
        catchError((err: any) => {
          console.log(err);
          return of();
        })
      )),
      takeUntil(merge(this.$destroy, this.$operation)),
    ).subscribe(this.handleError);
  }

  private updateItems(): Observable<ApiTodoItem[]> {
    return this.api.getTodos().pipe(
      tap((data: ApiTodoItem[]) => {
        this.loaded = true;
        this.todos = data.map(i => new TodoItem(i));
      }),
    );
  }

  trackTodos(index: number, item: TodoItem): any {
    return item.id;
  }

  loadData(): void {
    this.updateItems().pipe(
      takeUntil(this.$destroy),
    ).subscribe(this.handleError);
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(this.dialogTemplate);
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }

  updateList(): void {
    this.closeDialog();
    this.loadData();
  }

  removeItem(id: number): void {
    this.$operation.next();
    this.api.removeTodo(id).pipe(
      mergeMap(() => this.updateItems()),
      finalize(() => this.startPooling()),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
    this.$operation.complete();
  }
}
