import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostResolverService} from './services/post-resolver.service';


const routes: Routes = [
  {path: '', children: [
      {
        path: 'all',
        component: AllPostsComponent,
        resolve: {allPosts: PostResolverService},
        loadChildren: () => import('../comment/comment.module').then(module => module.CommentModule)
      },
      {
        path: ':id/posts',
        component: AllPostsComponent,
        resolve: {allPosts: PostResolverService},
        loadChildren: () => import('../comment/comment.module').then(module => module.CommentModule)
      }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
