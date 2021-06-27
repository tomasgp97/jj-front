import {RequestStatus, ResponseAction, ResponseErrorAction} from "../common/types";

interface UpdateProfileRequest {
    type: typeof UPDATE_PROFILE,
}

interface GetFollowedUsersRequest {
    type: typeof GET_FOLLOWED_USERS,
}

interface UnfollowRequest {
    type: typeof UNFOLLOW,
}

// [MODULE_ACTIONS] NEW INTERFACE

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR';

export const GET_FOLLOWED_USERS = 'GET_FOLLOWED_USERS';
export const GET_FOLLOWED_USERS_SUCCESS = 'GET_FOLLOWED_USERS_SUCCESS';
export const GET_FOLLOWED_USERS_ERROR = 'GET_FOLLOWED_USERS_ERROR';

export const UNFOLLOW = 'UNFOLLOW';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_ERROR = 'UNFOLLOW_ERROR';

// [MODULE_ACTIONS] EXPORT ACTION

export interface UserResponseAction extends ResponseAction {
    type:
       typeof UPDATE_PROFILE_SUCCESS
	| typeof GET_FOLLOWED_USERS_SUCCESS
	| typeof UNFOLLOW_SUCCESS
        // [MODULE_ACTIONS] ADD ACTION TO RESPONSE ACTIONS TYPE
}

export interface UserResponseErrorAction extends ResponseErrorAction {
   type:
        typeof UPDATE_PROFILE_ERROR
	| typeof GET_FOLLOWED_USERS_ERROR
	| typeof UNFOLLOW_ERROR
        // [MODULE_ACTIONS] ADD ACTION TO ERROR ACTIONS TYPE
}

const userActions = {
	updateProfile: (data: any) => ({type: UPDATE_PROFILE}),
	updateProfileSuccess: (response: any): UserResponseAction => ({type: UPDATE_PROFILE_SUCCESS, response}),
	updateProfileError: (error: any): UserResponseErrorAction => ({type: UPDATE_PROFILE_ERROR, error}),

	getFollowedUsers: (id: any) => ({type: GET_FOLLOWED_USERS, id}),
	getFollowedUsersSuccess: (response: any): UserResponseAction => ({type: GET_FOLLOWED_USERS_SUCCESS, response}),
	getFollowedUsersError: (error: any): UserResponseErrorAction => ({type: GET_FOLLOWED_USERS_ERROR, error}),

	unfollow: (userId: any, followingId: any) => ({type: UNFOLLOW, userId, followingId}),
	unfollowSuccess: (response: any): UserResponseAction => ({type: UNFOLLOW_SUCCESS, response}),
	unfollowError: (error: any): UserResponseErrorAction => ({type: UNFOLLOW_ERROR, error}),

    // [MODULE_ACTIONS] DEFINE NEW ACTIONS
};

export type UserActionTypes = (
      UserResponseAction 
    | UserResponseErrorAction
    | UpdateProfileRequest
	| GetFollowedUsersRequest
	| UnfollowRequest
    // [MODULE_ACTIONS] EXPORT ACTION TYPE
)



export interface UserState {
    
}

export default userActions;
