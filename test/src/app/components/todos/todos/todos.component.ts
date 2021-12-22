import { Component } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  todoList: Todo[] = [
    {
      date: new Date().toLocaleDateString(),
      title: 'First',
      task: 'do first',
    },
    {
      date: new Date().toLocaleDateString(),
      title: 'Second',
      task: 'do second',
    },
    {
      date: new Date().toLocaleDateString(),
      title: 'Third',
      task: 'do third',
    },
    {
      date: new Date().toLocaleDateString(),
      title: 'Fourth',
      task: 'do fourth',
    },
  ];

  todoItem?: Todo;

  setItem(todo: Todo) {
    this.todoItem = todo;
  }

  unsetItem() {
    this.todoItem = undefined;
  }
}
