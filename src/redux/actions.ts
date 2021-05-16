import commonActions from '../common/common.actions';
import {ResponseAction, Rehydrate, ResponseErrorAction, LocationChange} from "../common/types";

import postsActions from '../posts/posts.actions';
// [GLOBAL ACTIONS] IMPORT MODULE ACTIONS
// [GLOBAL ACTIONS] IMPORT MODULE ACTION TYPES

export default {
    common: commonActions,
	posts: postsActions,
    // [GLOBAL ACTIONS] EXPORT ACTIONS
};

export type ActionTypes = LocationChange
    | Rehydrate
    // [GLOBAL ACTIONS] EXPORT ACTION TYPE
