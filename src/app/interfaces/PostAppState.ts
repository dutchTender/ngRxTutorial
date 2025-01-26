import {Post} from './Posts';
export interface PostAppState {
  isLoading: boolean;
  posts: Post[];
  error: string | null;
}
