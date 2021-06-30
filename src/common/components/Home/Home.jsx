import React, {useCallback, useEffect, useState} from 'react';
import './Home.scss';
import MainContent from "../MainContent/MainContent";
import {Button, IconButton} from "@material-ui/core";
import {services} from "../../../auth/auth.services";
import authActions from "../../../auth/auth.actions";
import {connect} from "react-redux";
import {usePrevious} from "../../../utils/hooksRef";
import {useHistory} from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {Search} from "@material-ui/icons";


/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 */
const Home = (props) => {
    const {
        logout,
        logoutStatus
    } = props;

    const handleLogout = () => {
        logout();
    }

    const [userValues, setUserValue] = useState([]);
    const [searchedValue, setSearchedValue] = useState('');


    const previousStatus = usePrevious({logoutStatus});
    const history = useHistory();

    useEffect(() => {
        if (previousStatus && previousStatus.logoutStatus !== logoutStatus && logoutStatus && logoutStatus.success) {
            console.log('hola')
            history.push('/login')
        }
    }, [logoutStatus]);

    const handleSelectOnChange = (event) => {
        const selectedUser = userValues[event.target.value];

    }
    const handleSearch = () => {
        search(searchedValue).then(response => setUserValue(response.map(x => ({id: x.id, username: x.username}))));
    }
    const handleOnChange = (event) => {
        setSearchedValue(event.target.value);
    }

    const search = useCallback(async (value) => {
        try {
            return await services.searchUsers(value);
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <div>
            <div className={'nav-bar'}>
                <Button href="/home" color="primary">
                    home
                </Button>
                <Button href="/profile" color="primary">
                    profile
                </Button>

                <div id="combo-box-div">

                    <Autocomplete
                        freeSolo
                        id="combo-box-demo"
                        options={userValues}
                        onChange={(event, newValue) => {
                            history.push(`/profile?id=${newValue.id}`)
                        }}
                        disableClearable
                        getOptionLabel={(option) => option.username}
                        style={{width: 200}}
                        renderInput={(params) => <TextField {...params}
                                                            InputProps={{...params.InputProps, type: 'search'}}
                                                            onChange={handleOnChange}
                                                            size="small"
                                                            label="Combo box" variant="outlined"/>}
                    />
                    <IconButton onClick={handleSearch} color="primary" aria-label="upload picture" component="span">
                        <Search/>
                    </IconButton>
                </div>
                <Button color="primary" onClick={handleLogout}>
                    logout
                </Button>
            </div>
            <div>
                <MainContent/>
            </div>
        </div>
    );
};

Home.propTypes = {};
const mapStateToProps = (state) => ({
    logoutStatus: state.auth.logoutStatus
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(authActions.logout())
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);

