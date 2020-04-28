import {Component, Input} from '@angular/core';
import {ToDoModel} from "../models/toDoModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  all_toDos: ToDoModel[] = [];

  constructor() {

  }

  catchToDos(toDosList: ToDoModel[]) {
    this.all_toDos = toDosList;
    console.log(this.all_toDos)
  }
}

// Task:
// Создаем свой список заданий
// Модель:
//   id, titile (нзвание),body (подробности), type (type -типа срочно , не срочно, через 3 года)
// Создать форму, которая будет создавать "задание".
//   Создать компоненту под задание.
//   Создать компоненту со всеми заданиями.
//   Задания сохранять  в отдельном массиве (где угодно)
// В єтом задании нет работы с API так что не ищите его)))))
