import {createSelector} from '@ngrx/store';
import {PostAppStateWrapper} from '../interfaces/PostAppStateWrapper';


export const postFeaturesSlice = (appState: PostAppStateWrapper) => appState.postData;

export const postsLoadingStatusSelector = createSelector(
  postFeaturesSlice,
  (state) => state.isLoading
);

export const postsContentSelector = createSelector(
  postFeaturesSlice,
  (state) => state.posts
);

export const postsErrorSelector = createSelector(
  postFeaturesSlice,
  (state) => state.error
);
