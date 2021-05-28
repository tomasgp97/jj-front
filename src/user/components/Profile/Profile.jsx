import React from 'react';
import {connect} from 'react-redux';
import './Profile.scss';


/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Profile = (props) => {
    const {

    } = props;

    // Ver los datos posts de dicho usuario
    return (
        // y el perfil que estoy viendo es solo texto y un boton de seguir. Entrare con algo como un profile/{id}
        <div>
            <p>{'This is Profile'}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

Profile.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

