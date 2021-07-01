import commonActions from '../common/common.actions';
import {ResponseAction, Rehydrate, ResponseErrorAction, LocationChange} from "../common/types";

import postsActions from '../posts/posts.actions';
import authActions from '../auth/auth.actions';
import baseActions from '../base/base.actions';
import userActions from '../user/user.actions';
import chatsActions from '../chats/chats.actions';
// [GLOBAL ACTIONS] IMPORT MODULE ACTIONS
import {PostsActionTypes} from '../posts/posts.actions';
import {AuthActionTypes} from '../auth/auth.actions';
import {UserActionTypes} from '../user/user.actions';
// [GLOBAL ACTIONS] IMPORT MODULE ACTION TYPES

export default {
    common: commonActions,
	posts: postsActions,
	auth: authActions,
	base: baseActions,
	user: userActions,
	chats: chatsActions,
    // [GLOBAL ACTIONS] EXPORT ACTIONS
};

export type ActionTypes = LocationChange
    | Rehydrate
	| PostsActionTypes
	| AuthActionTypes
	| UserActionTypes
    // [GLOBAL ACTIONS] EXPORT ACTION TYPE
