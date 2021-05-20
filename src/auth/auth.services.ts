import {deleteRequest, get, post, put, webApi} from '../utils/httpUtils';


export const services = {
	postCredentials: (email: string, password: string) => post(webApi +  `auth/credentials`, {email, password}),
    // [MODULE SERVICES] NEW SERVICE
};