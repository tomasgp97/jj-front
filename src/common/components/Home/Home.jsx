import React, {useCallback, useEffect} from 'react';
import './Home.scss';
import MainContent from "../MainContent/MainContent";
import {Button} from "@material-ui/core";
import {services} from "../../../auth/auth.services";
import authActions from "../../../auth/auth.actions";
import {connect} from "react-redux";
import {usePrevious} from "../../../utils/hooksRef";
import {useHistory} from "react-router-dom";

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Home = (props) => {
    const {
        logout,
        logoutStatus
    } = props;

    const handleLogout = () => {
       logout();
    }

    const previousStatus = usePrevious({logoutStatus});
    const history = useHistory();
    useEffect(() => {
        if (previousStatus && previousStatus.logoutStatus !== logoutStatus && logoutStatus && logoutStatus.success) {
            console.log('hola')
            history.push('/login')
        }
    }, [logoutStatus]);

    return (
        <div>
            <div className={'nav-bar'}>
                <Button href="/home" color="primary">
                    home
                </Button>
                <Button href="/profile" color="primary">
                    profile
                </Button>

                <Button color="primary" onClick={handleLogout}>
                    logout
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
const mapStateToProps = (state) => ({
    logoutStatus: state.auth.logoutStatus
});

const mapDispatchToProps = (dispatch) => ({
    logout: () =>{
        dispatch(authActions.logout())
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);

