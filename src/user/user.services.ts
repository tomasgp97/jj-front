import {deleteRequest, get, post, put, webApi} from '../utils/httpUtils';

export const services = {
	updateProfile: (data: any) => put('/api/users', {data}),
	getFollowedUsers: (id: any) => get(`api/followers/${id}`),
	unfollow: (userId: any, followingId: any) => deleteRequest(`/api/followers`, {followingId, userId}),
    // [MODULE SERVICES] NEW SERVICE
};
