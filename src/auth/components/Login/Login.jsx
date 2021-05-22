import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './Login.scss';
import authActions from "../../auth.actions";
import {Button, TextField} from "@material-ui/core";

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
        <div className={'login'}>
            <h2>Login</h2>
            <div className={'wrapper'}>
                <TextField id="outlined-basic" label="username" variant="outlined" />
                <TextField id="outlined-basic" label="password" variant="outlined" />
                <Button style={{marginTop: '15px', maxWidth:'100px'}} variant="contained" color="primary">
                    Login
                </Button>
            </div>
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

