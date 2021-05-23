import React, {useState} from 'react';
import {connect} from 'react-redux';
import './SignUp.scss';
import {Button, TextField} from "@material-ui/core";


/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const SignUp = (props) => {
    const {

    } = props;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameInput = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordInput = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleSendData = () => {
        if (password !== confirmPassword)
            return

        const data = {
            username,
            email,
            password
        }
    }

    return (
        <div className={'sign-up'}>
            <div className={'body'}>
                <h2>Register</h2>
                <div className={'form-field'}>
                    <TextField value={username} onChange={handleUsernameInput} label="username" variant="outlined" />
                </div>
                <div className={'form-field'}>
                    <TextField value={email} label="email" variant="outlined" />
                </div>
                <div className={'form-field'}>
                    <TextField value={password} label="password" variant="outlined" />
                </div>
                <div className={'form-field'}>
                    <TextField value={confirmPassword} label="repeat password" variant="outlined" />
                </div>
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

});

const mapDispatchToProps = (dispatch) => ({

});

SignUp.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

