import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToDoModel} from "../../models/toDoModel";

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  todoList: ToDoModel[] = [];

  addTodo: FormGroup;

  todoTitle: FormControl = new FormControl('', [Validators.required]);
  todoBody: FormControl = new FormControl('', [Validators.required]);
  todoType: FormControl = new FormControl('', [Validators.required]);

  @Output()
  forwardTodoList = new EventEmitter();

  constructor() {
    this.addTodo = new FormGroup({
      todoTitle: this.todoTitle,
      todoBody: this.todoBody,
      todoType: this.todoType
    })
  }

  addTodoAction(form: FormGroup) {
    this.todoList.push({
      id: +this.todoList.length + 1,
      title: form.value.todoTitle,
      body: form.value.todoBody,
      type: form.value.todoType
    })
    this.forwardTodoList.emit(this.todoList)
  }

  ngOnInit(): void {
  }

}
