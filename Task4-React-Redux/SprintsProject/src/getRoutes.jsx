import React from 'react';
import { Route, browserHistory }  from 'react-router';

import {getSubtasksByTaskId} from "./Task/Subtask/subtasksActions";
import {getTasksBySprintId, getTask} from "./Task/tasksActions";

import App from './App';
import Sprint from './Sprint';
import Task from './Task';

function onSprintEnter(dispatch, auth) {
 //   requireAuth(auth);
    return (nextState) => {
        var id = nextState.params.id;
        dispatch(getTasksBySprintId(auth, id));
    };
}

function onTaskEnter(dispatch, auth) {
 //   requireAuth(auth);
    return (nextState) => {
        var id = nextState.params.id;
        dispatch(getTask(auth, id));
        dispatch(getSubtasksByTaskId(auth, id));
    };
}

function requireAuth(auth) {
    console.log(auth);
  //  console.log(auth.loggedIn());
    if (auth && !auth.loggedIn()) {
        //auth.login();
     //   auth.login();
        browserHistory.push('/login');
    }
}

function directToLogin(auth) {
    if (auth) {
        auth.login();
    }
}
// onEnter={requireAuth(auth)}
export default (dispatch, auth) => {
    return (
        <Route>
            <Route component={App} path='/' auth={auth} onEnter={requireAuth(auth)}>
                <Route component={Sprint} path='sprint/:id' onEnter={onSprintEnter(dispatch, auth)} />
                <Route component={Task} path='task/:id' onEnter={onTaskEnter(dispatch, auth)} />
            </Route>
            <Route component={Login} path='login' onEnter={directToLogin(auth)} auth={auth} />
        </Route>
    )
};

import { Component } from 'react'
class Login extends Component {
    componentDidMount() {
        let auth = this.props.route.auth;
        auth.login();
    }
    render() {

        return (
            <div></div>
        );
    }
}