import {Component, Input, OnInit} from '@angular/core';
import {ToDoModel} from "../../models/toDoModel";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  toDo: ToDoModel;

  toDoIsCompleted: boolean;

  constructor() { }

  ngOnInit(): void {
    this.toDoIsCompleted = this.toDo.isCompleted;
  }

  changeStatus(id: number) {
    const toDosString = localStorage.getItem('toDosList')
    let toDosList = JSON.parse(toDosString);
    let foundTodo = toDosList.find(todo => todo.id === id);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    const newToDosString = JSON.stringify(toDosList);
    localStorage.setItem('toDosList', newToDosString)
    this.toDoIsCompleted = foundTodo.isCompleted;
  }
}
