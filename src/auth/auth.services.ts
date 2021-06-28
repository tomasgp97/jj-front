import {deleteRequest, get, post, put, webApi} from '../utils/httpUtils';


export const services = {
	postCredentials: (username: string, password: string) => post(`/api/login`, {username, password}),

	signUp: (username: any, password: any, firstName: any, lastName: any, email: any) =>
		post(`/api/users/register`, {username, password, firstName, lastName, email}),
	getMe: () => get('/api/users/me'),
	logout: () => post('/api/users/logout',{}),
	// [MODULE SERVICES] NEW SERVICE
};
