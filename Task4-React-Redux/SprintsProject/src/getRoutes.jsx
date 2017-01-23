import React from 'react';
import { Route }  from 'react-router';

import {getSubtasksByTaskId} from "./Task/Subtask/subtasksActions";
import {getTasksBySprintId, getTask} from "./Task/tasksActions";

import App from './App';
import Sprint from './Sprint';
import Task from './Task';

function onSprintEnter(dispatch, auth, Sprint) {
    return (nextState) => {
        var id = nextState.params.id;
        dispatch(getTasksBySprintId(auth, id));
    };
}

function onTaskEnter(dispatch, auth) {
    return (nextState) => {
        var id = nextState.params.id;
        dispatch(getTask(auth, id));
        dispatch(getSubtasksByTaskId(auth, id));
    };
}

function requireAuth(auth) {
    return (nextState, replace) => {
        if (auth && !auth.loggedIn()) {
            auth.login();
        }
    }
}

export default (dispatch, auth) => {
    return (
        <Route component={App} path='/' auth={auth} >
            <Route onEnter={requireAuth(auth)} >
                <Route component={Sprint} path='sprint/:id' onEnter={onSprintEnter(dispatch, auth)} />
                <Route component={Task} path='task/:id' onEnter={onTaskEnter(dispatch, auth)} />
            </Route>
            <Route path='login' />
        </Route>
    )
};