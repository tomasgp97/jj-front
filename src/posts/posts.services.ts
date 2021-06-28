import {deleteRequest, get, post, put, webApi} from '../utils/httpUtils';

export const services = {
	getPosts: (id:number) => get(`/api/posts/user/${id}`),
	newPost: (text: string, userId: number) => post(`/api/posts/`, {text, userId: userId}),
	deletePost: (id: any) => deleteRequest(`/api/posts/${id}`),
	followUser: (userId: any, followingId: any) => post(`api/followers`, {userId, followingId}),
	likePost: (id: any, userId: any) => post(`/api/likes/${id}`, {userId}),
	unLikePost: (id: any, userId: any) => deleteRequest(`/api/likes/${id}`, {userId}),

	// [MODULE SERVICES] NEW SERVICE
};
