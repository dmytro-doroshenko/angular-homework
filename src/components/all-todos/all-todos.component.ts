import {Component, Input, OnInit} from '@angular/core';
import {ToDoModel} from "../../models/toDoModel";

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {

  @Input()
  all_toDos: ToDoModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
