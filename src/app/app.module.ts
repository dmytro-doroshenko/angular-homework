import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {PostComponent} from '../components/post/post.component';
import { CommentComponent } from '../components/comment/comment.component';
import { UserComponent } from '../components/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolverService} from './services/user-resolver.service';
import {PostResolverService} from './services/post-resolver.service';
import {CommentResolverService} from './services/comment-resolver.service';
import { AllUsersComponent } from '../components/all-users/all-users.component';
import { AllPostsComponent } from '../components/all-posts/all-posts.component';
import { AllCommentsComponent } from '../components/all-comments/all-comments.component';
import { MainComponent } from '../components/main/main.component';

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
