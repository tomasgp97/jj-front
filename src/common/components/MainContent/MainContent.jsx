import React from 'react';
import {connect} from 'react-redux';
import './MainContent.scss';
import {PrivateRoute} from "../../../auth/PrivateRoute";
import Profile from "../../../user/components/Profile/Profile";
import PostList from "../../../posts/components/PostList/PostList";
import PrincipalPanel from "./../../../chat/chat"
import {Switch} from "react-router-dom";
import {Route} from "react-router";
import EditProfile from "../../../user/components/EditProfile/EditProfile";

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
                <PrivateRoute path={'/profile'} component={Profile}/>
                <PrivateRoute path={'/Edit-profile'} component={EditProfile}/>
                <PrivateRoute path={'/'} component={PostList}/>
                <PrivateRoute path={'/chat'} component={PrincipalPanel} />
            </Switch>
        </div>
    );
};

MainContent.propTypes = {

};

export default MainContent;

