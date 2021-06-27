import React from 'react';
import {connect} from 'react-redux';
import './Home.scss';
import {useHistory} from 'react-router-dom';
import Login from "../../../auth/components/Login/Login";
import SignUp from "../../../auth/components/SignUp/SignUp";
import {PrivateRoute} from "../../../auth/PrivateRoute";
import Profile from "../../../user/components/Profile/Profile";
import PostList from "../../../posts/components/PostList/PostList";
import MainContent from "../MainContent/MainContent";
import {Button} from "@material-ui/core";

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Home = (props) => {
    const {

    } = props;


    return (
        <div>
            <div className={'nav-bar'}>
                <Button href="/home" color="primary">
                    home
                </Button>
                <Button href="/profile" color="primary">
                    profile
                </Button>
            </div>
            <div>
                <MainContent/>
            </div>
        </div>
    );
};

Home.propTypes = {

};

export default Home;

