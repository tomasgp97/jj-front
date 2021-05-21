import React, {FunctionComponent, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import PostCard from "./posts/components/PostCard/PostCard";
import PostList from "./posts/components/PostList/PostList";

function App() {
    return (
        <div>
            <Switch>
                <Route path={'/'} render={(): JSX.Element => <PostList/>}/>
            </Switch>
        </div>
    );
}



export default App;
