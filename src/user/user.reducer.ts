import userActions, {
	UPDATE_PROFILE,
	UPDATE_PROFILE_SUCCESS,
	UPDATE_PROFILE_ERROR,

	GET_FOLLOWED_USERS,
	GET_FOLLOWED_USERS_SUCCESS,
	GET_FOLLOWED_USERS_ERROR,

    // [MODULE REDUCER] IMPORT ACTIONS
} from './user.actions';
import {ActionTypes} from "../redux/actions";
import  {UserState} from "./user.actions"
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
};

const userReducer = (state = initialState, action: ActionTypes): UserState => {
    switch (action.type) {
		case UPDATE_PROFILE: return {...state, updateProfileStatus: REQUEST_STATUS.LOADING};
		case UPDATE_PROFILE_SUCCESS: return {...state, updateProfileStatus: REQUEST_STATUS.SUCCESS};
		case UPDATE_PROFILE_ERROR: return {...state, updateProfileStatus: REQUEST_STATUS.ERROR};

		case GET_FOLLOWED_USERS: return {...state, getFollowedUsersStatus: REQUEST_STATUS.LOADING};
		case GET_FOLLOWED_USERS_SUCCESS: return {...state, getFollowedUsersStatus: REQUEST_STATUS.SUCCESS, followedUsers: action.response};
		case GET_FOLLOWED_USERS_ERROR: return {...state, getFollowedUsersStatus: REQUEST_STATUS.ERROR};

        // [MODULE REDUCER] SWITCH CASE
        default: return state;
    };
}

export default userReducer;
