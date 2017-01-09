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

export function deleteTask(taskId) {
    return dispatch => {
        return fetchCall(dispatch, "Tasks/" + taskId, "DELETE").then(id => {
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

export function addTask(task) {
    return dispatch => {
        return fetchCall(dispatch, "Tasks", "POST", task).then(task => {
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

export function editTask(task) {
    return dispatch => {
        return fetchCall(dispatch, "Tasks/" + task.id, "PUT", task).then(task => {
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

export function getAllTasks() {
    return dispatch => {
        return fetchCall(dispatch, "Tasks", "GET").then(tasks => {
            dispatch(receive(loadAllTasksToState(tasks)));
        });
    }
}

export function getTask(id) {
    return dispatch => {
        return fetchCall(dispatch, "Tasks/" + id, "GET").then(task => {
            dispatch(receive(addTaskToState(task)));
        });
    }
}

export function getTasksBySprintId(sprintId) {
    return dispatch => {
        return fetchCall(dispatch, "Tasks/BySprintId/" + sprintId, "GET").then(tasks => {
            dispatch(receive(loadAllTasksToState(tasks)));
        });
    }
}