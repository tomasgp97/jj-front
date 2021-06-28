import React from "react";

import { Redirect, Route } from "react-router-dom";
import {PATH} from "../utils/consts";
import { store } from "../redux/configureStore"

export const PrivateRoute = ({ component: Component,...rest }) => {

    return (
        <Route {...rest}>
            {
                store.getState().auth.isLoggedIn ?
                   <Redirect to={{pathname: '/home'}}/>
                    :  <Component/>
            }
        </Route>
    );
};

export default PrivateRoute;
