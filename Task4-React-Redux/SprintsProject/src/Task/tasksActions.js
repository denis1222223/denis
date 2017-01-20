import { fetchCall, receive } from '../Common/fetchCall';
import { showSpinner } from "../Common/Spinner/spinnerActions";

export const EDIT_TASK = 'EDIT_TASK';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_ALL_TASKS = 'GET_ALL_TASKS';

function deleteTaskFromState(taskId) {
    return {
        type: DELETE_TASK,
        taskId
    };
}

export function deleteTask(auth, taskId) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: "tasks/" + taskId, method: "DELETE"}).then(id => {
            dispatch(receive(deleteTaskFromState(id)));
        });
    }
}

function addTaskToState(task) {
    return {
        type: ADD_TASK,
        task
    };
}

export function addTask(auth, task) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: "tasks", method: "POST", body: task}).then(task => {
            dispatch(receive(addTaskToState(task)));
        });
    }
}

function editTaskInState(task) {
    return {
        type: EDIT_TASK,
        task
    };
}

export function editTask(auth, task) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: "tasks/" + task.id, method: "PUT", body: task}).then(task => {
            dispatch(receive(editTaskInState(task)));
        });
    }
}

function loadAllTasksToState(tasks) {
    return {
        type: GET_ALL_TASKS,
        tasks
    }
}

export function getAllTasks(auth) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: "tasks", method: "GET"}).then(tasks => {
            dispatch(receive(loadAllTasksToState(tasks)));
        });
    }
}

export function getTask(auth, id) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: "tasks/" + id, method: "GET"}).then(task => {
            dispatch(receive(loadAllTasksToState([task])));
        });
    }
}

export function getTasksBySprintId(auth, sprintId) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: "tasks/bySprintId/" + sprintId, method: "GET"}).then(tasks => {
            dispatch(receive(loadAllTasksToState(tasks)));
        });
    }
}