import React, {useState} from 'react';
import {connect} from 'react-redux';
import './PostCard.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import ClearIcon from '@material-ui/icons/Clear';
import {IconButton} from "@material-ui/core";
import {Favorite} from "@material-ui/icons";
import {useHistory} from "react-router-dom";

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const PostCard = (props) => {
    const {
        text,
        dashboardCards = true,
        postKey,
        userId
    } = props;



    return (
        dashboardCards? <DashboardCardsComp userId={userId} postId={postKey} text={text}/>: ownProfileCards(text)
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

const DashboardCardsComp = ({text, postId, userId}) => {

    const history = useHistory();
    const [isLiked, setIsLiked] = useState(false);

    const handleAvatarClick = () => {
       history.push(`/profile?id=${userId}`);
    }
    const handleLikePost = () => {

        // todo
        setIsLiked(!isLiked);
    }

    return(
        <div className={'post-card'} key={postId}>
            <div className={'avatar-info'}>
                <Avatar className={'avatar'} onClick={handleAvatarClick}>H</Avatar>
                <p>{text || ''}</p>
            </div>
            <div>
                <IconButton onClick={handleLikePost} color="primary" aria-label="upload picture" component="span">
                    <Favorite color={ isLiked? 'secondary': 'primary'} />
                </IconButton>
            </div>
        </div>
        )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

PostCard.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);

