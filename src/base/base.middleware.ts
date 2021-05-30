import baseActions, {
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './base.actions';
import  {services} from './base.services'
import {Middleware} from 'redux'

const baseMiddleware: Middleware = api => (next) => (action) => {
    next(action);
    switch (action.type) {
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default baseMiddleware;