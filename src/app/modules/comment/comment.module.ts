import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentComponent} from './components/comment/comment.component';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';


@NgModule({
  declarations: [
    CommentComponent,
    AllCommentsComponent,
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ]
})
export class CommentModule { }
