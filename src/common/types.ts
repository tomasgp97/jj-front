import { REHYDRATE } from 'redux-persist';

export interface Rehydrate {
    readonly type: typeof REHYDRATE;
    readonly payload: any;
}

export interface LocationChange {
    readonly type: '@@router/LOCATION_CHANGE';
}

export interface ResponseAction {
    response: any,
    navigateTo?: string
}

export interface ResponseErrorAction {
    error: any
}

export interface RequestStatus {
    loading: boolean
    success: boolean
    error: any
}
