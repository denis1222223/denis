import React from 'react';
import { Route, IndexRedirect }  from 'react-router';
import App from './App';
import Sprint from './Sprint';
import Task from './Task';

export default (
    <Route component={App} path='/'>
        <Route component={Sprint} path='sprint' />
        <Route component={Task} path='task' />
    </Route>
);
