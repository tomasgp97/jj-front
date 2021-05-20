import {RequestStatus, ResponseAction, ResponseErrorAction} from "../common/types";

interface PostCredentialsRequest {
    type: typeof POST_CREDENTIALS,
}

// [MODULE_ACTIONS] NEW INTERFACE

export const POST_CREDENTIALS = 'POST_CREDENTIALS';
export const POST_CREDENTIALS_SUCCESS = 'POST_CREDENTIALS_SUCCESS';
export const POST_CREDENTIALS_ERROR = 'POST_CREDENTIALS_ERROR';

// [MODULE_ACTIONS] EXPORT ACTION

export interface AuthResponseAction extends ResponseAction {
    type:
       typeof POST_CREDENTIALS_SUCCESS
        // [MODULE_ACTIONS] ADD ACTION TO RESPONSE ACTIONS TYPE
}

export interface AuthResponseErrorAction extends ResponseErrorAction {
   type:
        typeof POST_CREDENTIALS_ERROR
        // [MODULE_ACTIONS] ADD ACTION TO ERROR ACTIONS TYPE
}

const authActions = {
	postCredentials: (email: any, password: any) => ({type: POST_CREDENTIALS, email, password}),
	postCredentialsSuccess: (response: any): AuthResponseAction => ({type: POST_CREDENTIALS_SUCCESS, response}),
	postCredentialsError: (error: any): AuthResponseErrorAction => ({type: POST_CREDENTIALS_ERROR, error}),

    // [MODULE_ACTIONS] DEFINE NEW ACTIONS
};

export type AuthActionTypes = (
      AuthResponseAction 
    | AuthResponseErrorAction
    | PostCredentialsRequest
    // [MODULE_ACTIONS] EXPORT ACTION TYPE
)



export interface AuthState {
    
}

export default authActions;