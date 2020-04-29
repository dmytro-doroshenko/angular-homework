import {Component, Input} from '@angular/core';
import {ToDoModel} from "../models/toDoModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  all_toDos_string: string = localStorage.getItem('toDosList');

  all_toDos: ToDoModel[] = JSON.parse(this.all_toDos_string) || [];

  constructor() {}
}

// Task:
// Создаем свой список заданий
// Модель:
//   id, title (нзвание),body (подробности), type (type -типа срочно , не срочно, через 3 года)
// Создать форму, которая будет создавать "задание".
//   Создать компоненту под задание.
//   Создать компоненту со всеми заданиями.
//   Задания сохранять  в отдельном массиве (где угодно)
// В этом задании нет работы с API так что не ищите его)))))
// зберігати список в localStorage та додати кнопку (відмічати зроблені завдання)
