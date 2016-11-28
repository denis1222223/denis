import React from 'react';
import { Route, IndexRedirect }  from 'react-router';
import App from 'components/App';
import Sprint from 'components/Sprint';
import Task from 'components/Task';

export default (
    <Route component={App} path='/'>
        <IndexRedirect to='sprint?id=1'/>
        <Route component={Sprint} path='sprint' />
        <Route component={Task} path='tasks' />
    </Route>
);