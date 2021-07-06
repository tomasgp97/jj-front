import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './SignUp.scss';
import {Button, TextField} from "@material-ui/core";
import authActions from "../../auth.actions";
import {usePrevious} from "../../../utils/hooksRef";
import {useHistory} from "react-router-dom";


/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const SignUp = (props) => {
    const {
        register,
        signUpStatus
    } = props;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const previousStatus = usePrevious({signUpStatus});

    const history = useHistory();

    useEffect(()=> {
        if (previousStatus && previousStatus.signUpStatus !== signUpStatus && signUpStatus && signUpStatus.success){
            history.push('/login')
        }

    } , [signUpStatus])

    const handleUsernameInput = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordInput = (event) => {
        setConfirmPassword(event.target.value);
    }

    useEffect(()=> {

        if (signUpStatus?.success){
            console.log(signUpStatus);
        }
    } , [signUpStatus])
    const handleSendData = () => {
        if (password !== confirmPassword)
            return


        register(username, password, firstName, lastName, email);
    }

    return (
        <div className={'sign-up'}>
            <div className={'body'}>
                <h2>Register</h2>
                <div className={'form-field'}>
                    <TextField  value={username} onChange={handleUsernameInput} label="username" variant="outlined" />
                </div>
                <div className={'form-field'}>
                    <TextField value={email} onChange={handleEmailInput} type={'email'} label="email" variant="outlined" />
                </div>
                <div className={'form-field'}>
                    <TextField value={firstName} onChange={handleFirstName} label="First name" variant="outlined" />
                </div>
                <div className={'form-field'}>
                    <TextField value={lastName} onChange={handleLastName} label="Last Name" variant="outlined" />
                </div>
                <div className={'form-field'}>
                    <TextField value={password} type="password" onChange={handlePasswordInput} label="password" variant="outlined" />
                </div>
                <div className={'form-field'}>
                    <TextField value={confirmPassword} type="password" onChange={handleConfirmPasswordInput} label="repeat password" variant="outlined" />
                </div>
                <Button  href={'/login'}>
                    Already have an account!
                </Button>
                <div className={'form-field'}>
                    <Button onClick={handleSendData} disabled={!username || !email || !password || !confirmPassword } variant="contained" color="primary">
                        Create account
                    </Button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    signUpStatus: state.auth.signUpStatus
});

const mapDispatchToProps = (dispatch) => ({
    register: (username, password, firstName, lastName, email) =>{
        dispatch(authActions.signUp(username, password, firstName, lastName, email))
    }
});

SignUp.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

