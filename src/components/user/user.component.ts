import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/UserModel';
import {PostModel} from '../../models/PostModel';
import {CommentModel} from '../../models/CommentModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserModel;

  @Input()
  posts: PostModel[];

  @Input()
  comments: CommentModel[];

  userPosts: PostModel[];

  constructor() {
    setTimeout(() => this.userPosts = this.getPosts(this.posts, this.user.id), 2000);
    // Прийшлося поставити тайм-аут, оскільки функція запускається раніше, ніж встигає прийти інформація із запиту і вилітає помилка
    // типу "Cannot read property 'id' of undefined". Я так розумію, в майбутньому ми будемо вчитись виправляти подібні помилки
    // правильними способами.
  }

  ngOnInit(): void {
  }

  getPosts(postsList, userId){
      const posts = [];
      for (const post of postsList) {
        if (post.userId === userId) {
          posts.push(post);
        }
      }
      return posts;
      // Якщо написати так, як нижче, то функція повертає масив булевих значень:
      // return postsList.map(post => post.userId === userId);  ==> отримуємо ([true, true, true, false, false, ...])
      // Не знаю, в чому причина, але на чистому js таке ніби має працювати...
  }

}
