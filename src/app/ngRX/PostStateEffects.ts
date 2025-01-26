import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {PostsService} from '../services/posts.service';
import * as PostActions from '../ngRX/PostStateActions';
import {mergeMap, map, catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class PostStateEffects {
      getPosts$ = createEffect(
        () =>
          this.postActions$.pipe(
            ofType(PostActions.getPosts), mergeMap(() => {
              return this.postService.getPosts().pipe(
                map((userPosts) => PostActions.getPostSuccess({ userPosts } )),
                // userPosts needs to match property name used for the action. here we used userPosts
                /*
                * export const getPostSuccess = createAction('[Posts] Get Posts Success', props<{userPosts: Post[]}>());*/
                  catchError(postsError => of(PostActions.getPostFailure({postsError})))
                /*export const getPostFailure = createAction('[Posts] Get Posts Failure', props<{postsError: string}>());*/
                );
            })
          )
      );

  constructor(private postService: PostsService, private postActions$: Actions) {
  }
}
