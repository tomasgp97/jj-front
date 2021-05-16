import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';
import { store, persistor, history } from './redux/configureStore';
import { ConnectedRouter } from "connected-react-router";
import actions from './redux/actions';
import './style/main.scss';
import './style/styles.scss';
import {loadTranslations, setLocale, syncTranslationWithStore} from "react-redux-i18n";
import translations from "./i18n";


const detectLanguage = () => {
    return 'es';
};

function startApp() {

    ReactDOM.render(
        <PersistGate loading={<div>loading</div>} persistor={persistor} onBeforeLift={() => {
            // @ts-ignore
            store.dispatch(loadTranslations(translations));
            // @ts-ignore
            store.dispatch(setLocale(detectLanguage()));


            // TODO: add token management here
            // const state = store.store.getState();
            // const tokenTS = localStorage["token-ts"];

            // if (Date.now() - tokenTS > 1800000 && state.session.isLoggedIn)
            //     store.store.dispatch(actions.session.logout());
        }}>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App/>
                </ConnectedRouter>
            </Provider>
        </PersistGate>
        ,
        document.getElementById('root')
    );
}

startApp();
