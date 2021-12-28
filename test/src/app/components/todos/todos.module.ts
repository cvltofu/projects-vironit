import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TodoItemComponent } from './todo-item/todoitem.component';
import { TodosListComponent } from './todo-list/todoslist.component';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodocreateComponent } from './todo-create/todocreate.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    TodoItemComponent,
    TodosListComponent,
    TodosComponent,
    TodocreateComponent,
  ],
  exports: [],
})
export class TodosModule {}
