import postsActions, {
	GET_POSTS,
	NEW_POST,
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './posts.actions';
import  {services} from './posts.services'
import {Middleware} from 'redux'

const postsMiddleware: Middleware = api => (next) => (action) => {
    next(action);
    switch (action.type) {
		case GET_POSTS:
			services.getPosts()
				.then((response: any) => api.dispatch(postsActions.getPostsSuccess(response)))
				.catch((error: any) => api.dispatch(postsActions.getPostsError(error)));
			break;
		case NEW_POST:
			services.newPost(action.text)
				.then((response: any) => api.dispatch(postsActions.newPostSuccess(response)))
				.catch((error: any) => api.dispatch(postsActions.newPostError(error)));
			break;
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default postsMiddleware;