import React from 'react';
import {connect} from 'react-redux';
import './MainContent.scss';
import {PrivateRoute} from "../../../auth/PrivateRoute";
import Profile from "../../../user/components/Profile/Profile";
import PostList from "../../../posts/components/PostList/PostList";
import {Switch} from "react-router-dom";
import {Route} from "react-router";

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const MainContent = (props) => {
    const {

    } = props;

    return (
        <div>
            <Switch>
                {/*TODO make Private route only for testing*/}
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/'} component={PostList}/>

            </Switch>
        </div>
    );
};

MainContent.propTypes = {

};

export default MainContent;

