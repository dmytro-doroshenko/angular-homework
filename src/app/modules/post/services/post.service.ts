import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../../../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getUserPosts(userId: number): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  getSelectedPost(postId: number): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}