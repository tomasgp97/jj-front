import React, {useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './PostCard.scss';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import ClearIcon from '@material-ui/icons/Clear';
import {IconButton} from "@material-ui/core";
import {Favorite, FavoriteBorder, FavoriteOutlined} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import postsActions from "../../posts.actions";
import {services} from "../../posts.services";

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
        username,


        deletePost,
        userData
    } = props;

    return (
        dashboardCards ?
            <DashboardCardsComp userData={userData} username={username} userId={userId} postId={postKey} text={text}/> :
            <OwnProfileCards text={text} postId={postKey} deletePost={deletePost}/>
    );
};

const OwnProfileCards = (
    {
        text, postId, deletePost
    }
) => {

    const handleDelete = () => {
        console.log(postId);
        deletePost(postId)
    }

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

const DashboardCardsComp = ({text, postId, userId, userData, username}) => {

    const history = useHistory();
    const [isLiked, setIsLiked] = useState(false);

    useEffect(()=> {
        // todo seter si esta likeado o no. hacer match de la lista de post likeados con el id de este post
    } , [])
    const handleAvatarClick = () => {
        console.log(userId)
        userData.id === userId ?
            history.push(`/profile`)
            :
            history.push(`/profile?id=${userId}`);
    }
    const handleLikePost = () => {

        isLiked ?
            unLike().then(() => setIsLiked(false))
            :
            likePost().then(() => setIsLiked(true))
        // // todo
        // setIsLiked(!isLiked);
    }

    const likePost = useCallback(async () => {
        try{
            const intPostId = parseInt(postId);
            const userDataId = parseInt(userData.id);
            return await services.likePost(intPostId, userDataId);
        }catch (err) {
            console.error(err);
        }
    }, []);

    const unLike = useCallback(async () => {
        try{
            const intPostId = parseInt(postId);
            const userDataId = parseInt(userData.id);
            return await services.unLikePost(intPostId, userDataId);
        }catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <div className={'post-card'} key={postId}>
            <div className={'avatar-info'}>
                <Avatar className={'avatar'} onClick={handleAvatarClick}>{(username && username[0]) ||'P'}</Avatar>
                <p>{username? `${username}: ` : ''} {text || ''}</p>
            </div>
            <div>
                <IconButton onClick={handleLikePost} color="primary" aria-label="upload picture" component="span">
                    {isLiked? <Favorite color={'secondary'}/> : <FavoriteBorder/>}
                </IconButton>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    deletePostStatus: state.posts.deletePostStatus,
    userData: state.auth.userData
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

