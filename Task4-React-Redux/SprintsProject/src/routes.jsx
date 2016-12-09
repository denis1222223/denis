import React from 'react';
import { Route, IndexRedirect }  from 'react-router';
import App from './App';
import Sprint from './Sprint';
import Task from './Task';

function getLastSprintId() {
    // requesting sprints from the server will be added later,
    // but for now let me leave like this, please
    return "none";
}

export default (
    <Route component={App} path='/'>
        <IndexRedirect to={'sprint?id=' + getLastSprintId()}/>
        <Route component={Sprint} path='sprint' />
        <Route component={Task} path='task' />
    </Route>
);
