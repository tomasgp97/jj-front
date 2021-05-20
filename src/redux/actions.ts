import commonActions from '../common/common.actions';
import {ResponseAction, Rehydrate, ResponseErrorAction, LocationChange} from "../common/types";

import postsActions from '../posts/posts.actions';
import authActions from '../auth/auth.actions';
// [GLOBAL ACTIONS] IMPORT MODULE ACTIONS
import {AuthActionTypes} from '../auth/auth.actions';
// [GLOBAL ACTIONS] IMPORT MODULE ACTION TYPES

export default {
    common: commonActions,
	posts: postsActions,
	auth: authActions,
    // [GLOBAL ACTIONS] EXPORT ACTIONS
};

export type ActionTypes = LocationChange
    | Rehydrate
	| AuthActionTypes
    // [GLOBAL ACTIONS] EXPORT ACTION TYPE
