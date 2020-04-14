import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(userId?: number, postId?: number): Observable<PostModel[]> {
    if (userId) {
      return this.http.get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    } else if (postId) {
      return this.http.get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
