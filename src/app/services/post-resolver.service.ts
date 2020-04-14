import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Route, RouterStateSnapshot} from '@angular/router';
import {PostModel} from '../../models/PostModel';
import {PostService} from './post.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService  implements Resolve<PostModel[]>{

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> | Promise<PostModel[]> | PostModel[] {
    return this.postService.getPosts();
  }
}
