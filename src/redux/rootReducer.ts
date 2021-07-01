import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { i18nReducer } from "react-redux-i18n";
import commonReducer from '../common/common.reducer';
import postsReducer from '../posts/posts.reducer';
import authReducer from '../auth/auth.reducer';
import baseReducer from '../base/base.reducer';
import userReducer from '../user/user.reducer';
import chatsReducer from '../chats/chats.reducer';
// [ROOT REDUCER] IMPORT REDUCER


const createRootReducer = (history : any) => combineReducers({
    i18n: i18nReducer,
    router: connectRouter(history),
    common: commonReducer,
	posts: postsReducer,
	auth: authReducer,
	base: baseReducer,
	user: userReducer,
	chats: chatsReducer,
    // [ROOT REDUCER] ADD REDUCER
});


export default createRootReducer;

