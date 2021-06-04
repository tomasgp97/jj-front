import {deleteRequest, get, post, put, webApi} from '../utils/httpUtils';


export const services = {
	postCredentials: (username: string, password: string) =>
		post(`api/login`, {username, password}).
	then(() => {
			get("api/users").then(r => console.log(r) )
		}),
	signUp: (username: any, password: any, firstName: any, lastName: any, email: any) => post(`api/users/register`,
		{username, password, firstName, lastName, email}),
    // [MODULE SERVICES] NEW SERVICE
};