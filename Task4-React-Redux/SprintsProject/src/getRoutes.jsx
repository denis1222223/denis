import React from 'react';
import { Route, IndexRedirect }  from 'react-router';

import {getSubtasksByTaskId} from "./Task/Subtask/subtasksActions";
import {getTasksBySprintId} from "./Task/tasksActions";

import App from './App';
import Sprint from './Sprint';
import Task from './Task';

function onSprintEnter(dispatch) {
    return (nextState) => {
        console.log("onSprintEnter");
        var id = nextState.params.id;
        dispatch(getTasksBySprintId(id));
    };
}

function onTaskEnter(dispatch) {
    return (nextState) => {
        console.log("onTaskEnter");
        var id = nextState.params.id;
        dispatch(getSubtasksByTaskId(id));
    };
}

export default (dispatch) => {
    return (
        <Route component={App} path='/' >
            <Route component={Sprint} path='sprint/:id' onEnter={onSprintEnter(dispatch)} />
            <Route component={Task} path='task/:id' onEnter={onTaskEnter(dispatch)} />
        </Route>
    )
};