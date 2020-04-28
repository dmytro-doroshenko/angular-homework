import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTodoFormComponent } from '../components/add-todo-form/add-todo-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AllTodosComponent } from '../components/all-todos/all-todos.component';
import { TodoComponent } from '../components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoFormComponent,
    AllTodosComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
