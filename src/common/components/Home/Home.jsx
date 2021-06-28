import React from 'react';
import './Home.scss';
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

