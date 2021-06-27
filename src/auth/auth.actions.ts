import {RequestStatus, ResponseAction, ResponseErrorAction} from "../common/types";

interface PostCredentialsRequest {
    type: typeof POST_CREDENTIALS,
}

interface SignUpRequest {
    type: typeof SIGN_UP,
}

interface GetMeRequest {
    type: typeof GET_ME,
}

// [MODULE_ACTIONS] NEW INTERFACE

export const POST_CREDENTIALS = 'POST_CREDENTIALS';
export const POST_CREDENTIALS_SUCCESS = 'POST_CREDENTIALS_SUCCESS';
export const POST_CREDENTIALS_ERROR = 'POST_CREDENTIALS_ERROR';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export const GET_ME = 'GET_ME';
export const GET_ME_SUCCESS = 'GET_ME_SUCCESS';
export const GET_ME_ERROR = 'GET_ME_ERROR';

// [MODULE_ACTIONS] EXPORT ACTION

export interface AuthResponseAction extends ResponseAction {
    type:
       typeof POST_CREDENTIALS_SUCCESS
	| typeof SIGN_UP_SUCCESS
	| typeof GET_ME_SUCCESS
        // [MODULE_ACTIONS] ADD ACTION TO RESPONSE ACTIONS TYPE
}

export interface AuthResponseErrorAction extends ResponseErrorAction {
   type:
        typeof POST_CREDENTIALS_ERROR
	| typeof SIGN_UP_ERROR
	| typeof GET_ME_ERROR
        // [MODULE_ACTIONS] ADD ACTION TO ERROR ACTIONS TYPE
}

const authActions = {
	postCredentials: (email: any, password: any) => ({type: POST_CREDENTIALS, email, password}),
	postCredentialsSuccess: (response: any): AuthResponseAction => ({type: POST_CREDENTIALS_SUCCESS, response}),
	postCredentialsError: (error: any): AuthResponseErrorAction => ({type: POST_CREDENTIALS_ERROR, error}),

	signUp: (username: any, password: any, firstName: any, lastName: any, email: any) => ({type: SIGN_UP, username, password, firstName, lastName, email}),
	signUpSuccess: (response: any): AuthResponseAction => ({type: SIGN_UP_SUCCESS, response}),
	signUpError: (error: any): AuthResponseErrorAction => ({type: SIGN_UP_ERROR, error}),

	getMe: () => ({type: GET_ME}),
	getMeSuccess: (response: any): AuthResponseAction => ({type: GET_ME_SUCCESS, response}),
	getMeError: (error: any): AuthResponseErrorAction => ({type: GET_ME_ERROR, error}),

    // [MODULE_ACTIONS] DEFINE NEW ACTIONS
};

export type AuthActionTypes = (
      AuthResponseAction 
    | AuthResponseErrorAction
    | PostCredentialsRequest
	| SignUpRequest
	| GetMeRequest
    // [MODULE_ACTIONS] EXPORT ACTION TYPE
)



export interface AuthState {
    
}

export default authActions;