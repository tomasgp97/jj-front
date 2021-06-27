import postsActions, {
	GET_POSTS,
	NEW_POST,
	DELETE_POST,
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
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default postsMiddleware;
