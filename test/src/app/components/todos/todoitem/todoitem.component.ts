import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todoitem.component.html',
})
export class TodoItemComponent {
  @Input() todoItem!: Todo;

  @Output() onChangedItem = new EventEmitter();
  closeItem() {
    this.onChangedItem.emit();
  }
}
