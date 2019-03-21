import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable()
export class TodoDataService {

  // placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // placeholder for todos
  todos: Todo[] = [];

  constructor(private api: ApiService) { }

  // simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  // simulate DELETE /todos/:id
  deleteTodoById(id: number): Observable<Todo> {
    return this.api.deleteTodoById(id);
  }


  // simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // simulate GET /todos/:id
  getTodoById(id: number): Observable<Todo> {
    return this.api.getTodoById(id);
  }

  // toggle todo complete
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }


}
