import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-all-user-posts',
  templateUrl: './all-user-posts.component.html',
  styleUrls: ['./all-user-posts.component.css']
})
export class AllUserPostsComponent implements OnInit {

  posts: PostModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    this.activatedRoute.params.subscribe(params =>
      this.postService
        .getPosts(params.id)
        .subscribe(posts => this.posts = posts));
  }

  ngOnInit(): void {
  }

}
