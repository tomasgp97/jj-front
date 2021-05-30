import userActions, {
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './user.actions';
import  {services} from './user.services'
import {Middleware} from 'redux'

const userMiddleware: Middleware = api => (next) => (action) => {
    next(action);
    switch (action.type) {
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default userMiddleware;