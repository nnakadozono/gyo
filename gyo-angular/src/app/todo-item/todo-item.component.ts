import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() task!: string;
  @Input() completed!: boolean;
  @Output() toggleTask = new EventEmitter<any>();
  @Output() deleteTask = new EventEmitter<any>();

  get textDecoration(): string {
    return this.completed ? 'line-through' : 'none';
  }
}
