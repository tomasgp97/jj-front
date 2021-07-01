import chatsActions, {
    // [MODULE MIDDLEWARE] IMPORT ACTIONS
} from './chats.actions';
import  {services} from './chats.services'
import {Middleware} from 'redux'

const chatsMiddleware: Middleware = api => (next) => (action) => {
    next(action);
    switch (action.type) {
        // [MODULE MIDDLEWARE] SWITCH CASE
        default: break;
    }
};

export default chatsMiddleware;