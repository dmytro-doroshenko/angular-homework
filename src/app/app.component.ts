import { Component } from '@angular/core';
import {PostModel} from '../models/PostModel';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson1-homework';
  posts: PostModel[];


  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }
}
