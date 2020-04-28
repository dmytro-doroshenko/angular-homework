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

  constructor() { }

  ngOnInit(): void {
  }

}
