import { Component, OnInit } from '@angular/core';
import { TodoService, Task } from '../todo.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.tasks$ = this.todoService.getTodos();
  }

  addTask(task: string): void {
    this.todoService.createTodo(task).subscribe(newTask => {
      // Assuming you want to update the UI with the newly added task
      this.tasks$ = this.tasks$.pipe(map(tasks => [...tasks, newTask]));
    });
  }

  toggleTask(id: string): void {
    this.todoService.toggleTodo(id).subscribe(updatedTask => {
      this.tasks$ = this.tasks$.pipe(
        map(tasks => tasks.map(task => (task.id === id ? updatedTask : task)))
      );
    });
  }

  deleteTask(id: string): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.tasks$ = this.tasks$.pipe(
        map(tasks => tasks.filter(task => task.id !== id))
      );
    });
  }
}
