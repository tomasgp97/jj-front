import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './PostList.scss';
import postsActions from "../../posts.actions";
import PostCard from "../PostCard/PostCard";
import {usePrevious} from "../../../utils/hooksRef";
import {Button, TextField} from "@material-ui/core";


/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const PostList = (props) => {
    const {
        getHomePost,
        getHomePostStatus,
        homePosts,

        getLikedPosts,

        newPost,
        newPostStatus,

        userData
    } = props;


    const [postList, setPostList] = useState([]);
    const [postMessage, setPostMessage] = useState('');

    const previousStatus = usePrevious({getHomePostStatus, newPostStatus});


    const handleWriteMassage = (event) => {
        if (postMessage.length >= 140){
            return
        }
        setPostMessage(event.target.value)
    }

    const handleCreatePost = () => {
        newPost(postMessage, userData.id)
    }

    useEffect(()=> {
        getHomePost(userData.id);
        getLikedPosts(userData.id)
    }, [])

    useEffect(()=> {
        if (previousStatus && previousStatus.getPostsStatus !== getHomePostStatus && getHomePostStatus && getHomePostStatus.success){
                setPostList(homePosts)
            }
        }, [getHomePostStatus]);

    useEffect(()=> {
        if (previousStatus && previousStatus.newPostStatus !== newPostStatus && newPostStatus && newPostStatus.success){
            setPostMessage('');
            getHomePost(userData.id)
        }
    }, [newPostStatus]);


    useEffect(()=> {}, [newPostStatus]);

    return (
        <div className={'post-list'}>
            <h2>Posts</h2>
            <div className={'creation-input'}>
                
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                value={postMessage}
                onChange={handleWriteMassage}
                multiline
                placeholder="Write a comment"
                rows={5}
                variant="outlined"/>

                <div className={'send-button'}>
                    <Button disabled={postMessage.length === 0 || postMessage.length >= 140 } onClick={handleCreatePost} variant="contained" color="primary">
                        Post
                    </Button>
                </div>
            </div>

            <div className={'body'}>
                {
                    postList.map((x, index) => <PostCard key={index}
                                                         username={x.userDto.username}
                                                         userId={x.postDto.userId}
                                                         postKey={x.postDto.postId}
                                                         text={x.postDto.text}/>)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    getHomePostStatus: state.posts.getHomePostStatus,
    homePosts: state.posts.homePosts,

    newPostStatus: state.posts.newPostStatus,
    newPost: state.posts.post,

    userData: state.auth.userData
});

const mapDispatchToProps = (dispatch) => ({
    getHomePost: (userId) => {
        dispatch(postsActions.getHomePost(userId))
    },
    getLikedPosts: (userId) => {
        dispatch(postsActions.getLikedPosts(userId))
    },
    newPost: (text, userId) => {
        dispatch(postsActions.newPost(text, userId))
    }
});

PostList.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

