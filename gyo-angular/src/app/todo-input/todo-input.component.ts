import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
  @Output() addTask = new EventEmitter<string>();
  task: string = '';

  onSubmit(): void {
    if (this.task.trim() !== '') {
      this.addTask.emit(this.task);
      this.task = '';
    }
  }
}
