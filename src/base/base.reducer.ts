import baseActions, {
    // [MODULE REDUCER] IMPORT ACTIONS
} from './base.actions';
import {ActionTypes} from "../redux/actions";
import  {BaseState} from "./base.actions"
import {REQUEST_STATUS} from "../utils/consts";

const initialState = {
    // [MODULE REDUCER] INITIAL STATE
};

const baseReducer = (state = initialState, action: ActionTypes): BaseState => {
    switch (action.type) {
        // [MODULE REDUCER] SWITCH CASE
        default: return state;
    };
}

export default baseReducer;