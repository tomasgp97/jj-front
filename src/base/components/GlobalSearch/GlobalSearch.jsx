import React from 'react';
import {connect} from 'react-redux';
import './GlobalSearch.scss';

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const GlobalSearch = (props) => {
    const {

    } = props;

    return (
        // Poder buscar por nombre usuarios par poder seguirlos. -> La lista va a ser nombre y un boton de seguir.  max 10 users?
        <div>
            <p>{'This is GlobalSearch'}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

GlobalSearch.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSearch);

