import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorText: string;
  isLoading: boolean;

  constructor(private dataService: DataService) {
    this.dataService.getError().subscribe(error => this.errorText = error);
    this.dataService.getLoadingStatus().subscribe(status => this.isLoading = status);
  }

  ngOnInit(): void {
  }

}
