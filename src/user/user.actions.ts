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

interface UpdateUserRequest {
    type: typeof UPDATE_USER,
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

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

// [MODULE_ACTIONS] EXPORT ACTION

export interface UserResponseAction extends ResponseAction {
    type:
       typeof UPDATE_PROFILE_SUCCESS
	| typeof GET_FOLLOWED_USERS_SUCCESS
	| typeof UNFOLLOW_SUCCESS
	| typeof UPDATE_USER_SUCCESS
        // [MODULE_ACTIONS] ADD ACTION TO RESPONSE ACTIONS TYPE
}

export interface UserResponseErrorAction extends ResponseErrorAction {
   type:
        typeof UPDATE_PROFILE_ERROR
	| typeof GET_FOLLOWED_USERS_ERROR
	| typeof UNFOLLOW_ERROR
	| typeof UPDATE_USER_ERROR
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

	//private Long id;
	//     @Size(min = 4, message = "username should have at least 4 characters")
	//     private String username;
	//     @Email
	//     private String ;
	//     private String firstName;
	//     private String lastName;
	//     @Size(min = 6, message = "password should have at least 6 characters")
	//     private String password;
	updateUser: (id: any, username: any, password: any, firstName: any, lastName: any, email: any) => ({type: UPDATE_USER, id, data: {
			username, password, firstName, lastName, email
		}}),
	updateUserSuccess: (response: any): UserResponseAction => ({type: UPDATE_USER_SUCCESS, response}),
	updateUserError: (error: any): UserResponseErrorAction => ({type: UPDATE_USER_ERROR, error}),

    // [MODULE_ACTIONS] DEFINE NEW ACTIONS
};

export type UserActionTypes = (
      UserResponseAction
    | UserResponseErrorAction
    | UpdateProfileRequest
	| GetFollowedUsersRequest
	| UnfollowRequest
	| UpdateUserRequest
    // [MODULE_ACTIONS] EXPORT ACTION TYPE
)



export interface UserState {
    
}

export default userActions;
