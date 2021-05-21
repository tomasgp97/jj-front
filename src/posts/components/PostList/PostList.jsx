import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './PostList.scss';
import postsActions from "../../posts.actions";
import PostCard from "../PostCard/PostCard";
import {usePrevious} from "../../../utils/hooksRef";

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

    const [postList, setPostList] = useState([]);

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

    useEffect(()=> {}, [getPostsStatus]);

    useEffect(()=> {}, [newPostStatus]);

    return (
        <div className={'post-list'}>
            <h2>Posts</h2>
            <div className={'creation-input'}>
                <textarea autoCapitalize={true} />
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
    getPosts: () => {
        dispatch(postsActions.getPosts())
    },
    newPost: (text) => {
        dispatch(postsActions.newPost(text))
    }
});

PostList.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

