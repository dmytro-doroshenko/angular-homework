import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.css']
})
export class SelectedPostComponent implements OnInit {

  post: PostModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    this.activatedRoute.queryParams.subscribe(queryParams =>
      this.postService
        .getPosts(null, queryParams.postId)
        .subscribe(post => this.post = post));
  }

  ngOnInit(): void {
  }

}
