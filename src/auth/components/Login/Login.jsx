import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './Login.scss';
import authActions from "../../auth.actions";

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Login = (props) => {
    const {
        postCredentialsStatus
    } = props;

    useEffect(()=> {

    } , [postCredentialsStatus])
    return (
        <div>
            <p>{'This is Login'}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    postCredentialsStatus: state.auth.postCredentialsStatus,
    credentialsResponse: state.auth.credentials_response
});

const mapDispatchToProps = (dispatch) => ({
    postCredentials: (email, password) =>{
        dispatch(authActions.postCredentials(email, password))
    }
});

Login.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

