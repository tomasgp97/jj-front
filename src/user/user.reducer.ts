import userActions, {
    // [MODULE REDUCER] IMPORT ACTIONS
} from './user.actions';
import {ActionTypes} from "../redux/actions";
import  {UserState} from "./user.actions"
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
};

const userReducer = (state = initialState, action: ActionTypes): UserState => {
    switch (action.type) {
        // [MODULE REDUCER] SWITCH CASE
        default: return state;
    };
}

export default userReducer;