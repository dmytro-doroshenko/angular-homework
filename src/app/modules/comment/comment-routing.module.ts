import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {CommentResolverService} from './services/comment-resolver.service';
import {PostComponent} from '../post/components/post/post.component';
import {PostResolverService} from '../post/services/post-resolver.service';
import {SelectedPostComponent} from '../post/components/selected-post/selected-post.component';


const routes: Routes = [
  {path: '', children: [
      {path: 'all', component: AllCommentsComponent, resolve: {allComments: CommentResolverService}, children: [
          {path: 'post', component: PostComponent, resolve: {post: PostResolverService}}
        ]},
      {path: ':postId/comments', component: AllCommentsComponent, resolve: {allComments: CommentResolverService}, children: [
          {path: 'post', component: SelectedPostComponent, resolve: {post: PostResolverService}}
        ]},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
