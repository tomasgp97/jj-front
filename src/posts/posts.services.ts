import {deleteRequest, get, post, put, webApi} from '../utils/httpUtils';

export const services = {
	getPosts: (id:number) => get(`/api/posts/user/${id}`),
	//	todo cambiar ese userID
	newPost: (text: string, userId: number) => post(`/api/posts/`, {text, userId: userId}),
	deletePost: (id: any) => deleteRequest(`/api/posts/${id}`),
    // [MODULE SERVICES] NEW SERVICE
};
