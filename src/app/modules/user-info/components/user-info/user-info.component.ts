import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../../services/data.service';
import {UserModel} from '../../../../../models/UserModel';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: UserModel;
  isLoading: boolean;

  constructor(private dataService: DataService) {
    this.dataService.getCurrentUser().subscribe(value => this.user = value);
    this.dataService.getLoadingStatus().subscribe(status => this.isLoading = status);
  }

  ngOnInit(): void {
  }
}
