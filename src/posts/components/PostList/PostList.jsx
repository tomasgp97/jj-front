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
        post
    } = props;

    //  Crear post
    //  Likear un post
    //  eliminar mis posts

    const [postList, setPostList] = useState([]);
    const [postMessage, setPostMessage] = useState('');


    const previousStatus = usePrevious({getPostsStatus, newPostStatus});


    useEffect(()=> {
        setPostList([
            {text: 'testing'},
            {text: 'testing2'},
            {text: 'testing'},
            {text: 'testing2'},{text: 'testing'},
            {text: 'testing2'},{text: 'testing'},
            {text: 'testing2'},{text: 'testing'},
            {text: 'testing2'},{text: 'testing'},
            {text: 'testing2'},{text: 'testing'},
            {text: 'testing2'},{text: 'testing'},
            {text: 'testing2'},{text: 'testing'},
            {text: 'testing2'},{text: 'testing'},
            {text: 'testing2'},{text: 'testing'},
            {text: 'testing2'},{text: 'testing'},
            {text: 'testing2'},
        ])
    }, [])

    const handleWriteMassage = (event) => {
        setPostMessage(event.target.value)
    }

    useEffect(()=> {
        getPosts(1006);
    }, [])
    useEffect(()=> {
    }, [getPostsStatus]);

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
                    <Button variant="contained" color="primary">
                        Post
                    </Button>
                </div>
            </div>

            <div className={'body'}>
                {
                    postList.map(x => <PostCard text={x.text}/>)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    getPostsStatus: state.posts.getPostsStatus,
    newPostStatus: state.posts.newPostStatus,
    posts: state.posts.posts,
    newPost: state.posts.post
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: (id) => {
        dispatch(postsActions.getPosts(id))
    },
    newPost: (text) => {
        dispatch(postsActions.newPost(text))
    }
});

PostList.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

