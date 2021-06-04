import {deleteRequest, get, post, put, webApi} from '../utils/httpUtils';


export const services = {
	postCredentials: (username: string, password: string) =>
		post(`api/login`, {username, password}).
	then(() => {
			get("api/users").then(r => console.log(r) )
		}),
    // [MODULE SERVICES] NEW SERVICE
};