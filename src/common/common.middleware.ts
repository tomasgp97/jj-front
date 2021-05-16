import {
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './common.actions';
import actions from '../redux/actions';
import {Middleware} from 'redux'

const commonMiddleware: Middleware = api => next => action => {
    next(action);
    switch (action.type) {
        // [MODULE MIDDLEWARE] SWITCH CASE

        default: break;
    }
};

export default commonMiddleware;
