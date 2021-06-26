import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PostList from "./posts/components/PostList/PostList";
import Login from "./auth/components/Login/Login";
import SignUp from "./auth/components/SignUp/SignUp";
import Profile from "./user/components/Profile/Profile";
import {PrivateRoute} from "./auth/PrivateRoute";
import Home from "./common/components/Home/Home";
import {createBrowserHistory} from "history";

function App() {
    const historyInstance = createBrowserHistory();

    return (
        <div style={{height: '100vh'}}>
            {/*// @ts-ignore*/}
            <BrowserRouter history={historyInstance}>
            <Switch>
                <Route path={'/login'} render={(): JSX.Element => <Login/>}/>
                <Route path={'/signUp'} render={(): JSX.Element => <SignUp/>}/>
                <Route path={'/home'} component={Home}/>
                <Route path={'/'} component={Home}/>
                {/*<Route path={'/'} render={(): JSX.Element => <Login/>}/>*/}
            </Switch>
            </BrowserRouter>
        </div>
    );
}



export default App;
