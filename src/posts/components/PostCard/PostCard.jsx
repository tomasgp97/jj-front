import React from 'react';
import {connect} from 'react-redux';
import './PostCard.scss';


/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const PostCard = (props) => {
    const {} = props;

    return (
        <div>
            <p>{'This is PostCard'}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

PostCard.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);

