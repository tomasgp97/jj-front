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
        getPosts,
        getPostsStatus,
        posts,


        newPost,
        newPostStatus,
        post,

        userData
    } = props;

    //  Crear post
    //  Likear un post
    //  eliminar mis posts

    const [postList, setPostList] = useState([]);
    const [postMessage, setPostMessage] = useState('');


    const previousStatus = usePrevious({getPostsStatus, newPostStatus});


    useEffect(()=> {
        setPostList([])
    }, [])

    const handleWriteMassage = (event) => {
        setPostMessage(event.target.value)
    }

    const handleCreatePost = () => {
        newPost(postMessage, userData.id)
    }

    useEffect(()=> {
        getPosts(userData.id);
    }, [])

    useEffect(()=> {
        if (previousStatus && previousStatus.getPostsStatus !== getPostsStatus && getPostsStatus && getPostsStatus.success){
                setPostList(posts)
            }
        }, [getPostsStatus]);

    useEffect(()=> {
        if (previousStatus && previousStatus.newPostStatus !== newPostStatus && newPostStatus && newPostStatus.success){
            setPostMessage('');
            getPosts(userData.id)
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
                    postList.map((x, index) => <PostCard key={index} userId={x.userId} postKey={x.postId} text={x.text}/>)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    getPostsStatus: state.posts.getPostsStatus,
    newPostStatus: state.posts.newPostStatus,
    posts: state.posts.posts,
    newPost: state.posts.post,
    userData: state.auth.userData
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: (id) => {
        dispatch(postsActions.getPosts(id))
    },
    newPost: (text, userId) => {
        dispatch(postsActions.newPost(text, userId))
    }
});

PostList.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

