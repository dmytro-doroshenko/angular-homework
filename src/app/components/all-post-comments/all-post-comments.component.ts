import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';
import {CommentModel} from '../../../models/CommentModel';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-all-post-comments',
  templateUrl: './all-post-comments.component.html',
  styleUrls: ['./all-post-comments.component.css']
})
export class AllPostCommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private commentService: CommentService
  ) {
      this.activatedRoute.params.subscribe(params =>
        this.commentService
          .getComments(params.id)
          .subscribe(comments => this.comments = comments))
  }

  ngOnInit(): void {
  }

}
