import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './Profile.scss';
import PostCard from "../../../posts/components/PostCard/PostCard";
import {usePrevious} from "../../../utils/hooksRef";


/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Profile = (props) => {
    const {

    } = props;



    const [postList, setPostList] = useState([]);

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

    // Ver los datos posts de dicho usuario
    return (
        // y el perfil que estoy viendo es solo texto y un boton de seguir. Entrare con algo como un profile/{id}
        <div style={{width: '100%', height: '100%'}}>
            {userProfile({list: postList})}
        </div>
    );
};

export const userProfile = (userData) => {
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
                    <h2>Nombre</h2>
                </div>
                <div className={'posts-list'}>
                    <div>
                        <h3>Posts</h3>
                    </div>
                    <div>
                        {
                            userData.list.map((x, index) => <PostCard text={x.text} key={index}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

Profile.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

