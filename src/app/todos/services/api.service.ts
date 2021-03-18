import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiTodoItem} from '../models';
import {API_URL} from './tokens';

@Injectable()
export class ApiService {

  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient,
  ) { }

  // Correct type for http-calls and Single Responability Principle
  getTodos(): Observable<ApiTodoItem[]> {
    return this.http.get<ApiTodoItem[]>(`${this.apiUrl}/todos`);
  }

  getTodo(id: number): Observable<ApiTodoItem> {
    return this.http.get<ApiTodoItem>(`${this.apiUrl}/todos/${id}`);
  }

  addTodo(text: string): Observable<ApiTodoItem> {
    return this.http.post<ApiTodoItem>(`${this.apiUrl}/todos/`, {text});
  }

  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/todos/${id}`);
  }

}
