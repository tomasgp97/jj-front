import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PostList from "./posts/components/PostList/PostList";
import Login from "./auth/components/Login/Login";
import SignUp from "./auth/components/SignUp/SignUp";
import Profile from "./user/components/Profile/Profile";
import {PrivateRoute} from "./auth/PrivateRoute";
import Home from "./common/components/Home/Home";
import {createBrowserHistory} from "history";
import PublicRoute from "./auth/PublicRoute";

function App() {
    const historyInstance = createBrowserHistory();

    return (
        <div style={{height: '100vh'}}>
            {/*// @ts-ignore*/}
            <BrowserRouter history={historyInstance}>
            <Switch>
                <PublicRoute path={'/login'} component={Login}/>
                <PublicRoute path={'/signUp'} component={SignUp}/>
                <PrivateRoute path={'/home'} component={Home}/>
                <PrivateRoute path={'/'} component={Home}/>
                <PublicRoute path={'/'} component={Login}/>
            </Switch>
            </BrowserRouter>
        </div>
    );
}



export default App;
