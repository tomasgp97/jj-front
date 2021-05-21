import {deleteRequest, get, post, put, webApi} from '../utils/httpUtils';

export const services = {
	getPosts: () => get(`posts`),
	newPost: (text: string) => post(`post`, {text}),
    // [MODULE SERVICES] NEW SERVICE
};