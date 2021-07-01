import chatsActions, {
    // [MODULE REDUCER] IMPORT ACTIONS
} from './chats.actions';
import {ActionTypes} from "../redux/actions";
import  {ChatsState} from "./chats.actions"
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
};

const chatsReducer = (state = initialState, action: ActionTypes): ChatsState => {
    switch (action.type) {
        // [MODULE REDUCER] SWITCH CASE
        default: return state;
    };
}

export default chatsReducer;