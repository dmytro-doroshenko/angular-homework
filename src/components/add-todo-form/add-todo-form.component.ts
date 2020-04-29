import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToDoModel} from "../../models/toDoModel";

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  @Input()
  todoList: ToDoModel[];

  addTodo: FormGroup;

  todoTitle: FormControl = new FormControl('', [Validators.required]);
  todoBody: FormControl = new FormControl('', [Validators.required]);
  todoType: FormControl = new FormControl('', [Validators.required]);


  constructor() {
    this.addTodo = new FormGroup({
      title: this.todoTitle,
      body: this.todoBody,
      type: this.todoType,
    })
  }

  addTodoAction() {
    this.todoList.push({
      id: +this.todoList.length + 1,
      title: this.todoTitle.value,
      body: this.todoBody.value,
      type: this.todoType.value,
      isCompleted: false
    })
    const toDoString = JSON.stringify(this.todoList);
    localStorage.setItem('toDosList', toDoString);
    this.todoTitle.reset();
    this.todoBody.reset();
    this.todoType.reset();
  }

  ngOnInit(): void {
  }

}
