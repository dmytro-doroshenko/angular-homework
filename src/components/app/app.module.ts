import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PostComponent} from '../post/post.component';
import { CommentComponent } from '../comment/comment.component';
import { UserComponent } from '../user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolverService} from '../../app/services/user-resolver.service';
import {PostResolverService} from '../../app/services/post-resolver.service';
import {CommentResolverService} from '../../app/services/comment-resolver.service';
import { AllUsersComponent } from '../all-users/all-users.component';
import { AllPostsComponent } from '../all-posts/all-posts.component';
import { AllCommentsComponent } from '../all-comments/all-comments.component';
import { MainComponent } from '../main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'users', component: AllUsersComponent, resolve: {allUsers: UserResolverService}},
  {path: 'posts', component: AllPostsComponent, resolve: {allPosts: PostResolverService}},
  {path: 'comments', component: AllCommentsComponent, resolve: {allComments: CommentResolverService}},
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    UserComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
