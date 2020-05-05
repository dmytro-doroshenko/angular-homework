import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './components/error/error.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('../app/modules/user-info/user-info.module').then(m => m.UserInfoModule)},
  {path: 'error/:errorId', component: ErrorComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
