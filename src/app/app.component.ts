import { Component } from '@angular/core';
import {PostModel} from '../models/PostModel';
import {PostService} from './services/post.service';
import {UserModel} from '../models/UserModel';
import {CommentModel} from '../models/CommentModel';
import {UserService} from './services/user.service';
import {CommentService} from './services/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson1-homework';
  users: UserModel[];
  posts: PostModel[];
  comments: CommentModel[];


  constructor(private userService: UserService,
              private postService: PostService,
              private commentService: CommentService
  ) {
    this.userService.getUsers().subscribe(users => {
      this.postService.getPosts().subscribe(posts => {
        this.commentService.getComments().subscribe(comments => this.comments = comments);
        this.posts = posts;
      });
      this.users = users;
    });
  }

  getUserPosts(postsList, userId){
    return postsList.filter(post => post.userId === userId);
  }
}
