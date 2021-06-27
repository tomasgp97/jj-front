import userActions, {
	UPDATE_PROFILE,
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './user.actions';
import  {services} from './user.services'
import {Middleware} from 'redux'

const userMiddleware: Middleware = api => (next) => (action) => {
    next(action);
    switch (action.type) {
		case UPDATE_PROFILE:
			services.updateProfile(action.data)
				.then((response: any) => api.dispatch(userActions.updateProfileSuccess(response)))
				.catch((error: any) => api.dispatch(userActions.updateProfileError(error)));
			break;
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default userMiddleware;