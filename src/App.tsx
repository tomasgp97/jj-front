import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PostList from "./posts/components/PostList/PostList";
import Login from "./auth/components/Login/Login";
import SignUp from "./auth/components/SignUp/SignUp";
import Profile from "./user/components/Profile/Profile";

function App() {
    return (
        <div style={{height: '100vh'}}>
            <Switch>
                <Route path={'/login'} render={(): JSX.Element => <Login/>}/>
                <Route path={'/signUp'} render={(): JSX.Element => <SignUp/>}/>
                <Route path={'/profile'} render={(): JSX.Element => <Profile/>}/>
                <Route path={'/'} render={(): JSX.Element => <PostList/>}/>
            </Switch>
        </div>
    );
}



export default App;
