import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos/todos.component';
import { TodosListComponent } from './components/todos/todolist/todoslist.component';
import { TodoItemComponent } from './components/todos/todoitem/todoitem.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosListComponent,
    TodoItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
