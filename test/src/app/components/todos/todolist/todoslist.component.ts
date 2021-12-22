import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todolist.component.html',
})
export class TodosListComponent {
  @Input() todoList!: Todo[];

  @Output() onChangedList = new EventEmitter();
  showTodo(todo: Todo) {
    this.onChangedList.emit(todo);
  }
}
