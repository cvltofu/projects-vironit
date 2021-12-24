import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodosService],
})
export class TodosComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  todoList!: Todo[];
  todoItem?: Todo;

  ngOnInit(): void {
    this.todosService.getTodosList().subscribe((value) => {
      this.todoList = value;
    });
  }

  //  = [
  //   {
  //     date: new Date(),
  //     title: 'First',
  //     task: 'do first',
  //   },

  setItem(todo: Todo) {
    this.todoItem = todo;
  }

  unsetItem() {
    this.todoItem = undefined;
  }
}
