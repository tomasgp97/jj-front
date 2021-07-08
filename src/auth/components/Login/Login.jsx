import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './Login.scss';
import authActions from "../../auth.actions";
import {Button, TextField} from "@material-ui/core";
import {usePrevious} from "../../../utils/hooksRef";
import {useHistory} from "react-router-dom";

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Login = (props) => {
    const {
        postCredentialsStatus,
        postCredentials
    } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const previousStatus = usePrevious({postCredentialsStatus});

    const history = useHistory();

    useEffect(()=> {
        if (previousStatus && previousStatus.postCredentialsStatus !== postCredentialsStatus && postCredentialsStatus && postCredentialsStatus.success){
            history.push('/')
        }

    } , [postCredentialsStatus])

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSendData = () => {
        postCredentials(username, password)
    }

    return (
        <div className={'login'}>
            <h2>Login dev 3 AAAAH</h2>
            <div className={'wrapper'}>
                <TextField value={username} onChange={handleUsernameChange} id="outlined-basic" label="username" variant="outlined" />
                <TextField onChange={handlePasswordChange} type="password" label="password" variant="outlined" />
                <Button  href={'/signup'}>
                    Create a new account!!!
                </Button>
                <Button disabled={!username || !password} onClick={handleSendData} style={{marginTop: '15px', maxWidth:'100px'}} variant="contained" color="primary">
                    Login
                </Button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    postCredentialsStatus: state.auth.postCredentialsStatus,
    userData: state.auth.userData
});

const mapDispatchToProps = (dispatch) => ({
    postCredentials: (email, password) =>{
        dispatch(authActions.postCredentials(email, password))
    }
});

Login.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

