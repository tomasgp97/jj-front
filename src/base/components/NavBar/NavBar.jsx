import React from 'react';
import {connect} from 'react-redux';
import './NavBar.scss';

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const NavBar = (props) => {
    const {

    } = props;

    return (
        <div>
            <p>{'This is NavBar'}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

NavBar.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

