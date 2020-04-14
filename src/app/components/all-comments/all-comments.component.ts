import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentModel} from '../../../models/CommentModel';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.comments = this.activatedRoute.snapshot.data.allComments;
  }

  ngOnInit(): void {
  }


}
