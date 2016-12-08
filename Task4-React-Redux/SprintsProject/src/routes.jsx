import React from 'react';
import { Route, IndexRedirect }  from 'react-router';
import App from 'components/App';
import Sprint from 'components/Sprint';
import Task from 'components/Task';

function getLastSprintId(store) {
    var sprints = store.getState().sprints;
    return sprints[sprints.length - 1].id;
}

export default (store) => {
    return (
        <Route component={App} path='/'>
            <IndexRedirect to={'sprint?id=' + getLastSprintId(store)}/>
            <Route component={Sprint} path='sprint' />
            <Route component={Task} path='task' />
        </Route>
    );
}