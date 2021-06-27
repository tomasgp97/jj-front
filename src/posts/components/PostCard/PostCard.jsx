import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './PostCard.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import ClearIcon from '@material-ui/icons/Clear';
import {IconButton} from "@material-ui/core";
import {Favorite} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import postsActions from "../../posts.actions";
import {usePrevious} from "../../../utils/hooksRef";

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
        userId,


        deletePost,
        deletePostStatus,
        getPosts
    } = props;

    return (
        dashboardCards ?
            <DashboardCardsComp userId={userId} postId={postKey} text={text}/> :
            <OwnProfileCards text={text} postId={postKey} deletePost={deletePost}/>
    );
};

const OwnProfileCards = (
    {
        text, postId, deletePost
    }
) => {

    const handleDelete = () => {
        deletePost(postId)
    }

    // solo puede elimiar post propios
    return (
        <div className={'profile-post-card'}>
            <p>{text || ''}</p>
            <Chip
                onClick={handleDelete}
                label={<ClearIcon/>}
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

    return (
        <div className={'post-card'} key={postId}>
            <div className={'avatar-info'}>
                <Avatar className={'avatar'} onClick={handleAvatarClick}>H</Avatar>
                <p>{text || ''}</p>
            </div>
            <div>
                <IconButton onClick={handleLikePost} color="primary" aria-label="upload picture" component="span">
                    <Favorite color={isLiked ? 'secondary' : 'primary'}/>
                </IconButton>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    deletePostStatus: state.posts.deletePostStatus,
});

const mapDispatchToProps = (dispatch) => ({
    deletePost: (id) => {
        dispatch(postsActions.deletePost(id))
    },
    getPosts: (id) => {
        dispatch(postsActions.getPosts(id))
    },
});

PostCard.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);

