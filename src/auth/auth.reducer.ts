import authActions, {
	POST_CREDENTIALS,
	POST_CREDENTIALS_SUCCESS,
	POST_CREDENTIALS_ERROR,

	SIGN_UP,
	SIGN_UP_SUCCESS,
	SIGN_UP_ERROR,

    // [MODULE REDUCER] IMPORT ACTIONS
} from './auth.actions';
import {ActionTypes} from "../redux/actions";
import  {AuthState} from "./auth.actions"
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
	isLoggedIn: false,
    // [MODULE REDUCER] INITIAL STATE
};

const authReducer = (state = initialState, action: ActionTypes): AuthState => {
    switch (action.type) {
		case POST_CREDENTIALS: return {...state, postCredentialsStatus: REQUEST_STATUS.LOADING};
		case POST_CREDENTIALS_SUCCESS: return {...state, isLoggedIn: true, postCredentialsStatus: REQUEST_STATUS.SUCCESS, userData: action.response};
		case POST_CREDENTIALS_ERROR: return {...state, postCredentialsStatus: REQUEST_STATUS.ERROR};

		case SIGN_UP: return {...state, signUpStatus: REQUEST_STATUS.LOADING};
		case SIGN_UP_SUCCESS: return {...state, signUpStatus: REQUEST_STATUS.SUCCESS};
		case SIGN_UP_ERROR: return {...state, signUpStatus: REQUEST_STATUS.ERROR};

        // [MODULE REDUCER] SWITCH CASE
        default: return state;
    };
}

export default authReducer;
