import {deleteRequest, get, post, put, webApi} from '../utils/httpUtils';

export const services = {
	updateProfile: (data: any) => put('/api/users', {data}),
    // [MODULE SERVICES] NEW SERVICE
};