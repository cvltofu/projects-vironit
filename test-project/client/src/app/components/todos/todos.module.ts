import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

import { TodoItemComponent } from './todo-item/todoitem.component';
import { TodosListComponent } from './todo-list/todoslist.component';
import { TodosComponent } from './todos/todos.component';
import { TodocreateComponent } from './todo-create/todocreate.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatTableModule,
  ],
  declarations: [
    TodoItemComponent,
    TodosListComponent,
    TodosComponent,
    TodocreateComponent,
  ],
  exports: [],
})
export class TodosModule {}
