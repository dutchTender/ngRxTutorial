import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Post} from '../interfaces/Posts';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  getPosts(): Observable<Post[]> {
    const posts = [
      { id: 1, text: 'first post', likes: 2},
      { id: 2, text: '2nd post', likes: 22},
      { id: 3, text: '3rd post', likes: 23},
    ];
    return of(posts).pipe(delay(2000));
  }

  constructor() { }
}
