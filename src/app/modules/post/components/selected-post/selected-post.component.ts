import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.css']
})
export class SelectedPostComponent implements OnInit {

  post: PostModel;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.post = value.post);
  }

  ngOnInit(): void {
  }

}
