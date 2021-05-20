import authActions, {
	POST_CREDENTIALS,
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './auth.actions';
import  {services} from './auth.services'
import {Middleware} from 'redux'

const authMiddleware: Middleware = api => (next) => (action) => {
    next(action);
    switch (action.type) {
		case POST_CREDENTIALS:
			services.postCredentials(action.email, action.password)
				.then((response: any) => api.dispatch(authActions.postCredentialsSuccess(response)))
				.catch((error: any) => api.dispatch(authActions.postCredentialsError(error)));
			break;
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default authMiddleware;