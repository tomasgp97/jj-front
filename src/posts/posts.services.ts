import {deleteRequest, get, post, put, webApi} from '../utils/httpUtils';

export const services = {
	getPosts: (id:number) => get(`/api/posts/user/${id}`),
	newPost: (text: string) => post(`post`, {text}),
    // [MODULE SERVICES] NEW SERVICE
};