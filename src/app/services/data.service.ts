import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentUser = new BehaviorSubject(null);
  private error = new BehaviorSubject('');
  private isLoading = new BehaviorSubject( false);

  constructor() { }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user) {
    this.currentUser.next(user);
  }

  getError() {
    return this.error;
  }

  setError(error) {
    this.error.next(error);
  }

  getLoadingStatus() {
    return this.isLoading;
  }

  setLoadingStatus(status: boolean) {
    this.isLoading.next(status);
  }
}
