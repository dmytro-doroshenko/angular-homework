import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../models/PostModel';
import {CommentModel} from '../../models/CommentModel';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostModel;

  @Input()
  comments: CommentModel[];

  postComments: CommentModel[];


  constructor() {
    setTimeout(() => this.postComments = this.getComments(this.comments, this.post.id), 2000);
    // Теж не обійшлось без таймера, вибивало помилку, як у випадку з постами)

  }

  ngOnInit(): void {
  }

  getComments(commentsList, postId) {
    const comments = [];
    for (const comment of commentsList) {
      if (comment.postId === postId) {
        comments.push(comment);
      }
    }
    return comments;
    // Ситуація аналогічна, як і з постами
  }
}
