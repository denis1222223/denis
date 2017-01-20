import React      from 'react';
import ReactDOM   from 'react-dom';
import { browserHistory, Router } from 'react-router';
import getRoutes from './getRoutes';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AuthService from "./utils/AuthService";

const store = configureStore();
const auth = new AuthService('C5HnaCD34kIMqPjdfA6EhUwpcMfp9tVY', 'denis1222223.eu.auth0.com', store.dispatch);

const component = (
    <Provider store={store}>
        <Router history={browserHistory}>
            {getRoutes(store.dispatch, auth)}
        </Router>
    </Provider>
);

ReactDOM.render(component, document.getElementById('react-view'));