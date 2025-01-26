import {createAction, props} from '@ngrx/store';
import {Post} from '../interfaces/Posts';

export const getPosts = createAction('[Posts] Get Posts');
export const getPostSuccess = createAction('[Posts] Get Posts Success', props<{userPosts: Post[]}>());
export const getPostFailure = createAction('[Posts] Get Posts Failure', props<{postsError: string}>());
