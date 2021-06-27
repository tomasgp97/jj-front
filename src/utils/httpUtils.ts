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
});

const appSettings = configureSettings;
export const webApi = appSettings.baseUrl;

httpClient.defaults.timeout = 30000;
// httpClient.defaults.xsrfHeaderName = "X-CSRFToken"
// httpClient.defaults.xsrfCookieName = 'csrftoken'
httpClient.defaults.withCredentials = true


const _request = (url: string , method : Method , data : object, config? : Config) => {
    return httpClient({url, method, data}).then((res) => {
        if(res.status === 200 || res.status === 201 || res.status === 204) return res.data;
        else throw (res.data);
    }).catch(errorResponse => {

        if (errorResponse.response.status === 401 && errorResponse.response.data) {
            // // _logout();
            // window.location.href = '/login';
        }
        throw (errorResponse.response || {status: 500})
    })
};

export const _logout = () => {
    localStorage["logout"] = true;
};

export const _getLogout = () => {
    return (localStorage["logout"] && JSON.parse(localStorage["loginOut"])) || false;
}
export const _cleanLogoutToken = () => {
    return (localStorage["logout"] && localStorage.removeItem("logout"));
}

export const get = (url: string, config?: Config) => _request(url, "GET", {}, config);

export const post = (url: string, body: {}, config?: Config) => _request(url, "POST", body, config);

export const authGet = (url: string, config : Config) => _request(url, "GET", {}, { ...config, baseUrl: appSettings.baseHost});

export const authPost = (url: string, body: {}) => _request(url, "POST", body, undefined);

export const put = (url: string, body: {}, config?: Config) => _request(url, "PUT", body, config);

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
