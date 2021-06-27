import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './Profile.scss';
import PostCard from "../../../posts/components/PostCard/PostCard";
import {Edit, GroupAdd} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import {useHistory, useLocation} from 'react-router-dom';
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

        deletePostStatus,
        userData,
        followUser
    } = props;


    const previousStatus = usePrevious({getPostsStatus});

    const [postList, setPostList] = useState([]);

    const query = new URLSearchParams(useLocation().search);
    const queryId = query.get('id');

    useEffect(() => {
        queryId ?
            getPosts(queryId):
            getPosts(userData.id);
    }, [])

    useEffect(() => {
        if (previousStatus && previousStatus.getPostsStatus !== getPostsStatus && getPostsStatus && getPostsStatus.success) {
            setPostList(posts)
        }
    }, [getPostsStatus]);

    // Ver los datos posts de dicho usuario
    return (
        // y el perfil que estoy viendo es solo texto y un boton de seguir. Entrare con algo como un profile/{id}
        <div style={{width: '100%', height: '100%'}}>
                <UserProfile personId={queryId}
                             loggedInUserData={userData}
                             userData={postList}
                             getPosts={getPosts}
                             followUser={followUser}
                             deletePostStatus={deletePostStatus}/>
        </div>
    );
}
;
const UserProfile = (props) => {
    const {
        userData,
        personId,
        deletePostStatus,
        getPosts,
        loggedInUserData,
        followUser
    } = props
    const history = useHistory();

    const previousStatus = usePrevious({deletePostStatus});
    const [isFollowingThisUser, setIsFollowingThisUser] = useState(false);

    useEffect(()=> {
        if(personId){

        }
    }, [])

    useEffect(() => {
        if (previousStatus && previousStatus.deletePostStatus !== deletePostStatus && deletePostStatus && deletePostStatus.success) {
            getPosts(loggedInUserData.id)
        }
    }, [deletePostStatus]);


    const handleFollow = () => {
        console.log(loggedInUserData.id, personId)
        followUser(loggedInUserData.id, parseInt(personId))
    }

    return (
        <div className={'user-profile'}>
            <div className={'profile-column'}>
                <div className={'profile-img'}>PROFILE:</div>
                <div className={'additional-info'}>
                    {loggedInUserData.email}
                </div>
            </div>
            <div className={'profile-data-column'}>
                <div className={'title'}>
                    <h2>
                        Username: {loggedInUserData.username}
                        {personId ?
                            <IconButton color="primary" aria-label="upload picture" component="span"
                                        onClick={handleFollow}>
                                <GroupAdd/>
                            </IconButton>
                            :
                            <IconButton color="primary" aria-label="upload picture" component="span"
                                        onClick={_ => history.push(PATH.EDIT_PROFILE)}>
                                <Edit/>
                            </IconButton>
                            }
                    </h2>

                </div>
                <div className={'posts-list'}>
                    <div>
                        <h3>Posts</h3>
                    </div>
                    <div className={'profile-post-list'}>
                        {
                            userData?.map((x, index) => <PostCard dashboardCards={personId !== undefined}
                                                                  wpostKey={x.postId}
                                                                  text={x.text} key={index}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => (
{
    getPostsStatus: state.posts.getPostsStatus,
    posts: state.posts.posts,
    deletePostStatus: state.posts.deletePostStatus,
    userData: state.auth.userData
}
);

const mapDispatchToProps = (dispatch) => (
{
    getPosts: (id) => {
        dispatch(postsActions.getPosts(id))
    },
    followUser: (userId, followingId) => {
        dispatch(postsActions.followUser(userId, followingId))
    },
}
);

Profile.propTypes =
{

}
;

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

