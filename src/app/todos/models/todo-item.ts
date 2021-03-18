import {ApiTodoItem} from './api-todo-item';

export class TodoItem {
  id: number;
  text: string;
  created: Date;

  constructor(item: ApiTodoItem) {
    this.id = item.id;
    this.text = item.text;
    this.created = new Date(item.created);
  }
}
