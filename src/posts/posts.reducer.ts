import postsActions, {
    // [MODULE REDUCER] IMPORT ACTIONS
} from './posts.actions';
import {ActionTypes} from "../redux/actions";
import  {PostsState} from "./posts.actions"
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
};

const postsReducer = (state = initialState, action: ActionTypes): PostsState => {
    switch (action.type) {
        // [MODULE REDUCER] SWITCH CASE
        default: return state;
    };
}

export default postsReducer;