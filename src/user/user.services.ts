import {deleteRequest, get, post, put, webApi} from '../utils/httpUtils';

export const services = {
	updateProfile: (data: any) => put('/api/users', {data}),
	getProfileData: (id: any) => get(`/api/users/${id}`),
	getChatContacts: () => get('/api/followers/contacts'),
	getFollowedUsers: (id: any) => get(`api/followers/${id}`),
	unfollow: (userId: any, followingId: any) => deleteRequest(`/api/followers`, {followingId, userId}),
	updateUser: (id: any, data: any) => put(`/api/users/`, {id,  username: data.username,
		email: data.email,
		firstName: data.firstName,
		lastName: data.lastName,
		password: data.password}),
    // [MODULE SERVICES] NEW SERVICE
};
