import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/UserModel';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private http: HttpClient) {
  }

  getUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}
