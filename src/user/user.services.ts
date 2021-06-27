import {deleteRequest, get, post, put, webApi} from '../utils/httpUtils';

export const services = {
	updateProfile: (data: any) => put('/api/users', {data}),
	getFollowedUsers: (id: any) => get(`api/followers/${id}`),
    // [MODULE SERVICES] NEW SERVICE
};
