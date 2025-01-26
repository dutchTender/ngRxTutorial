import {PostAppState} from '../interfaces/PostAppState';
import {createReducer, on} from '@ngrx/store';
import * as PostActions from './PostStateActions';



export const initialState: PostAppState = {
  error: null, isLoading: false, posts: []
};

export const postReducer = createReducer(
  initialState,
  on( PostActions.getPosts, (currentState) => ({
    ...currentState, isLoading: true}) ),
  on( PostActions.getPostSuccess, (currentState, postAction) => ({
    ...currentState, isLoading: false, posts: postAction.userPosts}) ),
  on( PostActions.getPostFailure, (currentState, postAction) => ({
    ...currentState, isLoading: false, error: postAction.postsError}) )
);

