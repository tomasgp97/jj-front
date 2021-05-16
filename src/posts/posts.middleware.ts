import postsActions, {
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './posts.actions';
import  {services} from './posts.services'
import {Middleware} from 'redux'

const postsMiddleware: Middleware = api => (next) => (action) => {
    next(action);
    switch (action.type) {
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default postsMiddleware;