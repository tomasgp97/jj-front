import {RequestStatus, ResponseAction, ResponseErrorAction} from "../common/types";

interface GetPostsRequest {
    type: typeof GET_POSTS,
}

interface NewPostRequest {
    type: typeof NEW_POST,
}

interface DeletePostRequest {
    type: typeof DELETE_POST,
}

// [MODULE_ACTIONS] NEW INTERFACE

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const NEW_POST = 'NEW_POST';
export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';
export const NEW_POST_ERROR = 'NEW_POST_ERROR';

export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_ERROR = 'DELETE_POST_ERROR';

// [MODULE_ACTIONS] EXPORT ACTION

export interface PostsResponseAction extends ResponseAction {
    type:
       typeof GET_POSTS_SUCCESS
	| typeof NEW_POST_SUCCESS
	| typeof DELETE_POST_SUCCESS
        // [MODULE_ACTIONS] ADD ACTION TO RESPONSE ACTIONS TYPE
}

export interface PostsResponseErrorAction extends ResponseErrorAction {
   type:
        typeof GET_POSTS_ERROR
	| typeof NEW_POST_ERROR
	| typeof DELETE_POST_ERROR
        // [MODULE_ACTIONS] ADD ACTION TO ERROR ACTIONS TYPE
}

const postsActions = {
	getPosts: (id: number) => ({type: GET_POSTS, id}),
	getPostsSuccess: (response: any): PostsResponseAction => ({type: GET_POSTS_SUCCESS, response}),
	getPostsError: (error: any): PostsResponseErrorAction => ({type: GET_POSTS_ERROR, error}),

	newPost: (text: string, userId: number) => ({type: NEW_POST, text, userId}),
	newPostSuccess: (response: any): PostsResponseAction => ({type: NEW_POST_SUCCESS, response}),
	newPostError: (error: any): PostsResponseErrorAction => ({type: NEW_POST_ERROR, error}),

	deletePost: (id: any) => ({type: DELETE_POST, id}),
	deletePostSuccess: (response: any): PostsResponseAction => ({type: DELETE_POST_SUCCESS, response}),
	deletePostError: (error: any): PostsResponseErrorAction => ({type: DELETE_POST_ERROR, error}),

    // [MODULE_ACTIONS] DEFINE NEW ACTIONS
};

export type PostsActionTypes = (
      PostsResponseAction 
    | PostsResponseErrorAction
    | GetPostsRequest
	| NewPostRequest
	| DeletePostRequest
    // [MODULE_ACTIONS] EXPORT ACTION TYPE
)



export interface PostsState {
    
}

export default postsActions;
