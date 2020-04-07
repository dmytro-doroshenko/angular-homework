import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../models/PostModel';
import {CommentModel} from '../../models/CommentModel';
import {CommentService} from '../../app/services/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  commentsForPost: any;

  @Input()
  post: PostModel;


  constructor(private commentService: CommentService) {
    this.commentService.getComments().subscribe(comments => {
      let cmnts = [];
      for (const c of comments) {
        if (c.postId === this.post.id) {
          cmnts.push(c);
        }
      }
      this.commentsForPost = [...cmnts];
    });

  }

  ngOnInit(): void {
  }

}
