import React from 'react';
import {connect} from 'react-redux';
import './SignUp.scss';
import {TextField} from "@material-ui/core";


/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const SignUp = (props) => {
    const {

    } = props;

    return (
        <div>
            <div>
                <TextField label="Outlined" variant="outlined" />
            </div>
            <div>
                <TextField label="Outlined" variant="outlined" />
            </div>
            <div>
                <TextField label="Outlined" variant="outlined" />
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

