import React from 'react';
import {connect} from 'react-redux';
import './PostCard.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import ClearIcon from '@material-ui/icons/Clear';

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const PostCard = (props) => {
    const {
        text,
        dashboardCards = true
    } = props;



    return (
        dashboardCards? dashboardCardsComp(text): ownProfileCards(text)
    );
};

const ownProfileCards = (text) => {

    const handleDelete = (postId) => {
        // todo
    }

    // solo puede elimiar post propios
    return(
    <div className={'profile-post-card'}>
        <p>{text || ''}</p>
        <Chip
            label={<ClearIcon />}
            color="secondary"
        />
    </div>)
}

const dashboardCardsComp = (text) => {

    const handleAvatarClick = () => {
        // todo go to profile
    }
    return(
        <div className={'post-card'}>
            <Avatar className={'avatar'} onClick={handleAvatarClick}>H</Avatar>
            <p>{text || ''}</p>
        </div>
        )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

PostCard.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);

