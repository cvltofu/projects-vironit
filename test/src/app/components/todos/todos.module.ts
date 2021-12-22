import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TodoItemComponent } from './todoitem/todoitem.component';
import { TodosListComponent } from './todolist/todoslist.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [TodoItemComponent, TodosListComponent, TodosComponent],
  exports: [],
})
export class TodosModule {}
