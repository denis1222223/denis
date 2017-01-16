import React from 'react';
import { Route }  from 'react-router';
import AuthService from "./utils/AuthService";

import {getSubtasksByTaskId} from "./Task/Subtask/subtasksActions";
import {getTasksBySprintId, getTask} from "./Task/tasksActions";

import App from './App';
import Sprint from './Sprint';
import Task from './Task';

const auth = new AuthService('iCHR0tEHu2NBYrM6K3dFFsC8h1EK3GCa', 'denis1222223.eu.auth0.com');
console.log(auth);

function onSprintEnter(dispatch) {
    return (nextState) => {
        var id = nextState.params.id;
        dispatch(getTasksBySprintId(id));
    };
}

function onTaskEnter(dispatch) {
    return (nextState) => {
        var id = nextState.params.id;
        dispatch(getTask(id));
        dispatch(getSubtasksByTaskId(id));
    };
}

export default (dispatch) => {
    return (
        <Route component={App} path='/' auth={auth}>
            <Route component={Sprint} path='sprint/:id' onEnter={onSprintEnter(dispatch)} />
            <Route component={Task} path='task/:id' onEnter={onTaskEnter(dispatch)} />
        </Route>
    )
};