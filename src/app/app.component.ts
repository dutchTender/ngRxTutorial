import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as PostActions from './ngRX/PostStateActions';
import {Observable} from 'rxjs';
import {postsContentSelector, postsErrorSelector, postsLoadingStatusSelector} from './ngRX/PostStateSelectors';
import {PostAppStateWrapper} from './interfaces/PostAppStateWrapper';
import {Post} from './interfaces/Posts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading$: Observable<boolean>;
  posts$: Observable<Post[]>;
  error$: Observable<string|null>;

  constructor( private ngRxStore: Store<PostAppStateWrapper>) {
    this.isLoading$ = this.ngRxStore.pipe(select(postsLoadingStatusSelector));
    this.posts$ = this.ngRxStore.pipe(select(postsContentSelector));
    this.error$ = this.ngRxStore.pipe(select(postsErrorSelector));
  }
  ngOnInit(): void {
    this.ngRxStore.dispatch(PostActions.getPosts());
  }
}
