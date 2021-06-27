import userActions, {
	UPDATE_PROFILE,
	GET_FOLLOWED_USERS,
	UNFOLLOW,
	UPDATE_USER,
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
		case GET_FOLLOWED_USERS:
			services.getFollowedUsers(action.id)
				.then((response: any) => api.dispatch(userActions.getFollowedUsersSuccess(response)))
				.catch((error: any) => api.dispatch(userActions.getFollowedUsersError(error)));
			break;
		case UNFOLLOW:
			services.unfollow(action.userId, action.followingId)
				.then((response: any) => api.dispatch(userActions.unfollowSuccess(response)))
				.catch((error: any) => api.dispatch(userActions.unfollowError(error)));
			break;
		case UPDATE_USER:
			services.updateUser(action.id, action.data)
				.then((response: any) => api.dispatch(userActions.updateUserSuccess(response)))
				.catch((error: any) => api.dispatch(userActions.updateUserError(error)));
			break;
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default userMiddleware;
