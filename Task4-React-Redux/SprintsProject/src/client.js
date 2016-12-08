import React      from 'react';
import ReactDOM   from 'react-dom';
import { browserHistory, Router } from 'react-router';
import getRoutes from './routes';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

const component = (
    <Provider store={store}>
        <Router history={browserHistory}>
            {getRoutes(store)}
        </Router>
    </Provider>
);

ReactDOM.render(component, document.getElementById('react-view'));