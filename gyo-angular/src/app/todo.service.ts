import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8000/api/todos";

export interface Task {
  id: string;
  task: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Task[]> {
    return this.http.get<Task[]>(API_URL);
  }

  createTodo(task: string): Observable<Task> {
    return this.http.post<Task>(API_URL, { task }, { headers: { "Content-Type": "application/json" } });
  }

  toggleTodo(id: string): Observable<Task> {
    const url = `${API_URL}/${id}`;
    return this.http.patch<Task>(url, null);
  }

  deleteTodo(id: string): Observable<void> {
    const url = `${API_URL}/${id}`;
    return this.http.delete<void>(url);
  }
}
