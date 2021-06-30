import postsActions, {
	GET_POSTS,
	NEW_POST,
	DELETE_POST,
	FOLLOW_USER,
	GET_HOME_POST,
	GET_LIKED_POSTS,
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './posts.actions';
import  {services} from './posts.services'
import {Middleware} from 'redux'

const postsMiddleware: Middleware = api => (next) => (action) => {
    next(action);
    switch (action.type) {
		case GET_POSTS:
			services.getPosts(action.id)
				.then((response: any) => api.dispatch(postsActions.getPostsSuccess(response)))
				.catch((error: any) => api.dispatch(postsActions.getPostsError(error)));
			break;
		case NEW_POST:
			services.newPost(action.text, action.userId)
				.then((response: any) => api.dispatch(postsActions.newPostSuccess(response)))
				.catch((error: any) => api.dispatch(postsActions.newPostError(error)));
			break;
		case DELETE_POST:
			services.deletePost(action.id)
				.then((response: any) => api.dispatch(postsActions.deletePostSuccess(response)))
				.catch((error: any) => api.dispatch(postsActions.deletePostError(error)));
			break;
		case FOLLOW_USER:
			services.followUser(action.userId, action.followingId)
				.then((response: any) => api.dispatch(postsActions.followUserSuccess(response)))
				.catch((error: any) => api.dispatch(postsActions.followUserError(error)));
			break;
		case GET_HOME_POST:
			services.getHomePost(action.userId)
				.then((response: any) => api.dispatch(postsActions.getHomePostSuccess(response)))
				.catch((error: any) => api.dispatch(postsActions.getHomePostError(error)));
			break;
		case GET_LIKED_POSTS:
			services.getLikedPosts(action.userId)
				.then((response: any) => api.dispatch(postsActions.getLikedPostsSuccess(response)))
				.catch((error: any) => api.dispatch(postsActions.getLikedPostsError(error)));
			break;
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default postsMiddleware;
