import React from 'react';
import {connect} from 'react-redux';
import './PostCard.scss';


/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const PostCard = (props) => {
    const {
        text
    } = props;

    return (
        <div>
            <p>{text || ''}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

PostCard.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);

