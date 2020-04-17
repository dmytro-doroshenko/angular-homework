import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';


// const routes: Routes = [
//   {path: '', component: AllUsersComponent, resolve: {allUsers: UserResolverService}, children: [
//       {path: ':id/posts', component: AllUserPostsComponent, children: [
//           {path: ':id/comments', component: AllPostCommentsComponent, children: [
//               {path: 'post', component: SelectedPostComponent}
//             ]}
//         ]}
//     ]},
// ];

const routes: Routes = [
  {
    path: '',
    component: AllUsersComponent,
    resolve: {allUsers: UserResolverService},
    loadChildren: () => import('../post/post.module').then(module => module.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
