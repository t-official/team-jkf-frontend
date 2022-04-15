import {
  START_POST_LOADING,
  POST,
  END_POST_LOADING,
  POST_FAILURE,
  POSTS,
  POSTS_FAILURE,
} from "../constants/actionTypes";
import * as api from "../../network/index.js";

export const makePost = (post, teamId) => async (dispatch) => {
  try {
    dispatch({ type: START_POST_LOADING });
    console.log(post, teamId);
    const { data } = await api.makePost(post, teamId);
    dispatch({ type: POST, payload: data.message });
    dispatch({ type: END_POST_LOADING });
  } catch (error) {
    console.log(error?.response?.data?.message);
    dispatch({
      type: POST_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const getPosts = (teamId) => async (dispatch) => {
  try {
    const { data } = await api.getPosts(teamId);
    console.log(data);
    dispatch({ type: POSTS, payload: data.message });
  } catch (error) {
    dispatch({
      type: POSTS_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};
