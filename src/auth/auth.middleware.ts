import authActions, {
	POST_CREDENTIALS,
	SIGN_UP,
	GET_ME,
	LOGOUT,
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './auth.actions';
import  {services} from './auth.services'
import {Middleware} from 'redux'
import {get} from "../utils/httpUtils";

const authMiddleware: Middleware = api => (next) => (action) => {
    next(action);
    switch (action.type) {
		case POST_CREDENTIALS:
			services.postCredentials(action.email, action.password)
				.then(() => {
					get("/api/users/me")
						.then((response: any) => {
							api.dispatch(authActions.postCredentialsSuccess(response))
						})
				})
				.catch((error: any) => api.dispatch(authActions.postCredentialsError(error)));
			break;
		case SIGN_UP:
			services.signUp(action.username, action.password, action.firstName, action.lastName, action.email)
				.then((response: any) => api.dispatch(authActions.signUpSuccess(response)))
				.catch((error: any) => api.dispatch(authActions.signUpError(error)));
			break;
		case GET_ME:
			services.getMe()
				.then((response: any) => api.dispatch(authActions.getMeSuccess(response)))
				.catch((error: any) => api.dispatch(authActions.getMeError(error)));
			break;
		case LOGOUT:
			services.logout()
				.then((response: any) => api.dispatch(authActions.logoutSuccess(response)))
				.catch((error: any) => api.dispatch(authActions.logoutError(error)));
			break;
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default authMiddleware;
