import React, {FunctionComponent, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import PostCard from "./posts/components/PostCard/PostCard";

function App() {
    return (
        <div>
            <Switch>
                <Route path={'/'} render={(): JSX.Element => <PostCard/>}/>
            </Switch>
        </div>
    );
}



export default App;
