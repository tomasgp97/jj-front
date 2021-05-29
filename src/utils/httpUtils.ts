import 'whatwg-fetch';
import configureSettings from '../settings'
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse, Method} from 'axios';
import actions from "../redux/actions";

interface Config {
    url? : string,
    method? : Method,
    token? : string,
    baseUrl?: string,
    headers?: {},
    options?: {},
    noAuth? : boolean
    data?: {}
}

const httpClient = axios.create({
    withCredentials: true
});
httpClient.defaults.timeout = 1200000;

const appSettings = configureSettings;
export const webApi = appSettings.webApi;

export let token : string | null = '';
// export let dispatchRef;
let loggedOutUser = false;

token = localStorage.getItem('token');

// httpClient.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     function (error) {
//         const originalRequest = error.config;
//         let refreshToken = getRefreshToken();
//         if (
//             refreshToken &&
//             error.response.status === 401 &&
//             !originalRequest._retry
//         ) {
//             originalRequest._retry = true;
//             return axios
//                 .post(`${webApi}auth/login/refresh/`, { refresh: refreshToken })
//                 .then((res) => {
//                     if (res.status === 200) {
//                         _saveToken(res.data.access);
//                         originalRequest.headers['Authorization'] = 'Bearer ' + res.data.access;
//                         return httpClient(originalRequest);
//                     }
//                 });
//         }
//         return Promise.reject(error);
//     }
// );

const _request = (url: string , method : Method , data : object, config? : Config) => {
    const headers = {...config?.headers, Authorization: config?.token || token};
    if (config?.noAuth || !token) delete headers.Authorization;
    let configObject : AxiosRequestConfig = {url: (config?.baseUrl || appSettings.baseUrl) + url, method, data, headers, ...config?.options};
    return httpClient(configObject).then((res : AxiosResponse) => {
        if(res.status === 200 || res.status === 201 || res.status === 204) return res.data;
        else throw (res.data);
    }).catch((errorResponse : AxiosError) => {
        // probablemente aca lo tenga que mandar al login o algo asi.
        if (errorResponse?.response?.status === 401) {
            // if (accessToken){
            //     cleanAll();
            //     window.location.reload();
            // }

        }
        throw (errorResponse.response || {status: 500})
    })
};

export const get = (url: string, config?: Config) => _request(url, "GET", {}, config);

export const post = (url: string, body: {}, config?: Config) => _request(url, "POST", body, config);

export const authGet = (url: string, config : Config) => _request(url, "GET", {}, { ...config, baseUrl: appSettings.baseHost});

export const authPost = (url: string, body: {}) => _request(url, "POST", body, undefined);

export const put = (url: string, body: {}, config: Config) => _request(url, "PUT", body, config);

export const authPut = (url: string, body: {}, config: Config) => _request(url, "PUT", body, { ...config, baseUrl: appSettings.baseHost});

export const patch = (url: string, body: {}, config: Config) => _request(url, "PATCH", body, config);
//
export const deleteRequest = (url: string, body: {}, config: Config) => _request(url, "DELETE", body, config);

export const services = {
    refreshToken: (token: string) => post(webApi + "auth/refresh/", {token}),
};

let interval = undefined;
export const saveCookieToken = () => {

}
export const setToken = (respToken: string, refreshToken?: string) => {
    localStorage.setItem('token', 'Token ' + respToken);
    localStorage.setItem('token-ts', Date.now().toString());
    token = 'Token ' + respToken;
};

export const setRefreshToken = (respToken: string) => {
    localStorage.setItem('refresh-token', respToken);
};

export const removeToken = () => {
    console.log("*** Removing token ***");
    localStorage.removeItem('token');
    localStorage.removeItem('token-ts');
    localStorage.removeItem('refresh-token');
    token = '';
};
