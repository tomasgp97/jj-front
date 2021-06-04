import React from "react";

import { Redirect, Route } from "react-router-dom";
import {PATH} from "../utils/consts";
import { store } from "../redux/configureStore"

export const PrivateRoute = ({ component: Component,...rest }) => {

    return (
        <Route {...rest}>
            {
                store.getState().auth.isLoggedIn ? <Component/> :
                   <Redirect to={{pathname: PATH.SIGN_IN}}/>
            }
        </Route>
    );
};

export default PrivateRoute;
