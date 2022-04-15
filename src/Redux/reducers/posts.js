import {
  START_POST_LOADING,
  POST,
  END_POST_LOADING,
  POST_FAILURE,
  START_POSTS_LOADING,
  POSTS,
  END_POSTS_LOADING,
  POSTS_FAILURE,
} from "../constants/actionTypes";

export const sendPostReducer = (state = {}, action) => {
  switch (action.type) {
    case POST:
      return { ...state, userPosts: action?.payload };
    case START_POST_LOADING:
      return { ...state, isloading: true };
    case END_POST_LOADING:
      return { ...state, isloading: false };
    case POST_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};

export const getPostsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POSTS:
      return { ...state, posts: action?.payload };
    case START_POSTS_LOADING:
      return { ...state, getPostsLoading: true };
    case END_POSTS_LOADING:
      return { ...state, getPostsLoading: false };
    case POSTS_FAILURE:
      return { ...state, getPostsLoading: false, error: action.payload };
    default:
      return state;
  }
};