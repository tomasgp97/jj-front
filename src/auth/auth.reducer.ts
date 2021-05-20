import authActions, {
	POST_CREDENTIALS,
	POST_CREDENTIALS_SUCCESS,
	POST_CREDENTIALS_ERROR,

    // [MODULE REDUCER] IMPORT ACTIONS
} from './auth.actions';
import {ActionTypes} from "../redux/actions";
import  {AuthState} from "./auth.actions"
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
};

const authReducer = (state = initialState, action: ActionTypes): AuthState => {
    switch (action.type) {
		case POST_CREDENTIALS: return {...state, postCredentialsStatus: REQUEST_STATUS.LOADING};
		case POST_CREDENTIALS_SUCCESS: return {...state, postCredentialsStatus: REQUEST_STATUS.SUCCESS, credentials_response: action.response};
		case POST_CREDENTIALS_ERROR: return {...state, postCredentialsStatus: REQUEST_STATUS.ERROR};

        // [MODULE REDUCER] SWITCH CASE
        default: return state;
    };
}

export default authReducer;