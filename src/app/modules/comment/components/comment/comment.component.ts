import {Component, Input, OnInit} from '@angular/core';
import {CommentModel} from '../../../../../models/CommentModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: CommentModel;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(comment: CommentModel) {
    this.router.navigate([ comment.id, 'post' ],
      {
        relativeTo: this.activatedRoute,
        queryParams: {postId: comment.postId}
      });
  }
}
