import { fetchCall } from '../Common/fetchConfig';

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
        return fetchCall("Tasks/" + taskId, "DELETE").then(id => {
            dispatch(deleteTaskFromState(id));
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
        return fetchCall("Tasks", "POST", task).then(task => {
            dispatch(addTaskToState(task));
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
        return fetchCall("Tasks/" + task.id, "PUT", task).then(task => {
            dispatch(editTaskInState(task));
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
        return fetchCall("Tasks", "GET").then(tasks => {
            dispatch(loadAllTasksToState(tasks))
        });
    }
}

export function getTasksBySprintId(sprintId) {
    return dispatch => {
        return fetchCall("Tasks/BySprintId/" + sprintId, "GET").then(tasks => {
            console.log(tasks);
            dispatch(loadAllTasksToState(tasks))
        });
    }
}