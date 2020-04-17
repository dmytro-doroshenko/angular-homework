import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostModel} from '../../../../../models/PostModel';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts = value.allPosts);
  }



  ngOnInit(): void {
  }

}
