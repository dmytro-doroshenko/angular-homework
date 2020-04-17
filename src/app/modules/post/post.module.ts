import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostComponent} from './components/post/post.component';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import { SelectedPostComponent } from './components/selected-post/selected-post.component';


@NgModule({
  declarations: [
    PostComponent,
    AllPostsComponent,
    SelectedPostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
