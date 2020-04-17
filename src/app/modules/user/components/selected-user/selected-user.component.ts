import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../../../models/UserModel';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {

  @Input()
  user: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
