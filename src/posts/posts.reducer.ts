import postsActions, {
	GET_POSTS,
	GET_POSTS_SUCCESS,
	GET_POSTS_ERROR,

	NEW_POST,
	NEW_POST_SUCCESS,
	NEW_POST_ERROR,

    // [MODULE REDUCER] IMPORT ACTIONS
} from './posts.actions';
import {ActionTypes} from "../redux/actions";
import  {PostsState} from "./posts.actions"
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
};

const postsReducer = (state = initialState, action: ActionTypes): PostsState => {
    switch (action.type) {
		case GET_POSTS: return {...state, getPostsStatus: REQUEST_STATUS.LOADING};
		case GET_POSTS_SUCCESS: return {...state, getPostsStatus: REQUEST_STATUS.SUCCESS, posts: action.response};
		case GET_POSTS_ERROR: return {...state, getPostsStatus: REQUEST_STATUS.ERROR};

		case NEW_POST: return {...state, newPostStatus: REQUEST_STATUS.LOADING};
		case NEW_POST_SUCCESS: return {...state, newPostStatus: REQUEST_STATUS.SUCCESS, post: action.response};
		case NEW_POST_ERROR: return {...state, newPostStatus: REQUEST_STATUS.ERROR};

        // [MODULE REDUCER] SWITCH CASE
        default: return state;
    };
}

export default postsReducer;