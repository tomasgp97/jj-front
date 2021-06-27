import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './Profile.scss';
import PostCard from "../../../posts/components/PostCard/PostCard";
import {Edit} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {PATH} from "../../../utils/consts";
import postsActions from "../../../posts/posts.actions";
import {usePrevious} from "../../../utils/hooksRef";


/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Profile = (props) => {
    const {
        getPosts,
        getPostsStatus,
        posts,

        deletePostStatus
    } = props;


    const previousStatus = usePrevious({getPostsStatus});


    const [postList, setPostList] = useState([]);

    useEffect(()=> {
        getPosts(1006);
    }, [])

    useEffect(()=> {
        if (previousStatus && previousStatus.getPostsStatus !== getPostsStatus && getPostsStatus && getPostsStatus.success){
            setPostList(posts)
        }
    }, [getPostsStatus]);

    // Ver los datos posts de dicho usuario
    return (
        // y el perfil que estoy viendo es solo texto y un boton de seguir. Entrare con algo como un profile/{id}
        <div style={{width: '100%', height: '100%'}}>
            <UserProfile userData={postList} getPosts={getPosts} deletePostStatus={deletePostStatus}/>
        </div>
    );
};
const UserProfile = (props) => {
    const {
        userData,
        deletePostStatus,
        getPosts,
    } = props
    const history = useHistory();

    const previousStatus = usePrevious({deletePostStatus});

    useEffect(() => {
        if (previousStatus && previousStatus.deletePostStatus !== deletePostStatus && deletePostStatus && deletePostStatus.success) {
            getPosts(1006)
        }
    }, [deletePostStatus]);

    return (
        <div className={'user-profile'}>
            <div className={'profile-column'}>
                <div className={'profile-img'}>img</div>
                <div className={'additional-info'}>
                    email...
                </div>
            </div>
            <div className={'profile-data-column'}>
                <div className={'title'}>
                    <h2>
                        Nombre
                        <IconButton color="primary" aria-label="upload picture" component="span" onClick={_ => history.push(PATH.EDIT_PROFILE)}>
                            <Edit/>
                        </IconButton>
                    </h2>

                </div>
                <div className={'posts-list'}>
                    <div>
                        <h3>Posts</h3>
                    </div>
                    <div className={'profile-post-list'}>
                        {
                            userData?.map((x, index) => <PostCard dashboardCards={false} postKey={x.postId} text={x.text} key={index}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    getPostsStatus: state.posts.getPostsStatus,
    posts: state.posts.posts,
    deletePostStatus: state.posts.deletePostStatus,
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: (id) => {
        dispatch(postsActions.getPosts(id))
    },
});

Profile.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

