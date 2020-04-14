import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../models/PostModel';
import {CommentModel} from '../../models/CommentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(postId): Observable<CommentModel[]> {
    if (postId) {
      return this.http.get<CommentModel[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    }
    return this.http.get<CommentModel[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
