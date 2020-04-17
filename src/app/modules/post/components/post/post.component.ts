import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../../../models/PostModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostModel;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navigate(post: PostModel) {
    this.router.navigate([post.id, 'comments'],
      {
        queryParams: {postId: post.id},
        relativeTo: this.activatedRoute,
      });
  }
}
