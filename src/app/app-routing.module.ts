import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'users', loadChildren: () => import('./modules/user/user.module').then(module => module.UserModule)},
  {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(module => module.PostModule)},
  {path: 'comments', loadChildren: () => import('./modules/comment/comment.module').then(module => module.CommentModule)}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
