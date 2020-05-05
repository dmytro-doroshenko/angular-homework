import {Component, Input} from '@angular/core';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userId: number;
  isLoading: boolean;

  constructor(
    private router: Router,
    private userService: UserService,
    private dataService: DataService,
  ) {
    this.dataService.getLoadingStatus().subscribe(status => this.isLoading = status);
  }

  getUserInfo() {
    this.dataService.setLoadingStatus(true);
    this.userService.getUser(this.userId).subscribe(
      user => {
        this.dataService.setCurrentUser(user);
        this.router.navigate(['user', this.userId]);
        this.dataService.setLoadingStatus(false);
      },
      error => {
        this.router.navigate(['error', error.status]);
        this.dataService.setCurrentUser(null);
        if (error.status === 404) {
          this.dataService.setError(`User with id ${this.userId} not found`);
        } else {
          this.dataService.setError(error);
        }
        this.dataService.setCurrentUser(null);
        this.dataService.setLoadingStatus(false);
      }
    );
  }
}

// Task:
// на главной компоненте сделать форму с инпутом, в него нужно вводить id юзера. По этому id ваш сервис обращяется к
// jsonplaceholder и достает конкретного юзера делая переход по роуту и показывая его на отдельной странице. Сделать
// guard который позволит запретить переход если такого id юзера ,который вы ввели, не существует.
//   Создать DataService, в который записывать всех юзеров, которых вы выбирали по номеру.
