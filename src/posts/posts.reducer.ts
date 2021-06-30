import postsActions, {
	GET_POSTS,
	GET_POSTS_SUCCESS,
	GET_POSTS_ERROR,

	NEW_POST,
	NEW_POST_SUCCESS,
	NEW_POST_ERROR,

	DELETE_POST,
	DELETE_POST_SUCCESS,
	DELETE_POST_ERROR,

	FOLLOW_USER,
	FOLLOW_USER_SUCCESS,
	FOLLOW_USER_ERROR,

	GET_HOME_POST,
	GET_HOME_POST_SUCCESS,
	GET_HOME_POST_ERROR,

	GET_LIKED_POSTS,
	GET_LIKED_POSTS_SUCCESS,
	GET_LIKED_POSTS_ERROR,

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

		case DELETE_POST: return {...state, deletePostStatus: REQUEST_STATUS.LOADING};
		case DELETE_POST_SUCCESS: return {...state, deletePostStatus: REQUEST_STATUS.SUCCESS};
		case DELETE_POST_ERROR: return {...state, deletePostStatus: REQUEST_STATUS.ERROR};

		case FOLLOW_USER: return {...state, followUserStatus: REQUEST_STATUS.LOADING};
		case FOLLOW_USER_SUCCESS: return {...state, followUserStatus: REQUEST_STATUS.SUCCESS};
		case FOLLOW_USER_ERROR: return {...state, followUserStatus: REQUEST_STATUS.ERROR};

		case GET_HOME_POST: return {...state, getHomePostStatus: REQUEST_STATUS.LOADING};
		case GET_HOME_POST_SUCCESS: return {...state, getHomePostStatus: REQUEST_STATUS.SUCCESS, homePosts: action.response};
		case GET_HOME_POST_ERROR: return {...state, getHomePostStatus: REQUEST_STATUS.ERROR};

		case GET_LIKED_POSTS: return {...state, getLikedPostsStatus: REQUEST_STATUS.LOADING};
		case GET_LIKED_POSTS_SUCCESS: return {...state, getLikedPostsStatus: REQUEST_STATUS.SUCCESS, likedPosts: action.response};
		case GET_LIKED_POSTS_ERROR: return {...state, getLikedPostsStatus: REQUEST_STATUS.ERROR};

        // [MODULE REDUCER] SWITCH CASE
        default: return state;
    };
}

export default postsReducer;
