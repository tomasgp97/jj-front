import authActions, {
	POST_CREDENTIALS,
	SIGN_UP,
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
		case SIGN_UP:
			services.signUp(action.username, action.password, action.firstName, action.lastName, action.email)
				.then((response: any) => api.dispatch(authActions.signUpSuccess(response)))
				.catch((error: any) => api.dispatch(authActions.signUpError(error)));
			break;
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default authMiddleware;