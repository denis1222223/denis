import { domen } from '../Common/apiUrls'

export const EDIT_TASK = 'EDIT_TASK';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_ALL_TASKS = 'GET_ALL_TASKS';

export function deleteTaskFromState(taskId) {
    return {
        type: DELETE_TASK,
        taskId
    };
}

export function deleteTask(taskId) {
    return dispatch => {
        return fetch(domen + "Tasks/" + taskId, {
            method: "DELETE"
        }).then(response => {
            return response.json();
        }).then(task => {
            dispatch(deleteTaskFromState(task.id));
        });
    }
}

export function addTaskToState(task) {
    return {
        type: ADD_TASK,
        task
    };
}

export function addTask(task) {
    return dispatch => {
        return fetch(domen + "Tasks", {
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            method: "POST",
            body: JSON.stringify({ ...task })
        }).then(response => {
            return response.json();
        }).then(task => {
            dispatch(addTaskToState(task));
        });
    }
}

export function editTaskInState(task) {
    return {
        type: EDIT_TASK,
        task
    };
}

export function editTask(task) {
    return dispatch => {
        return fetch(domen + "Tasks/" + task.id, {
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            method: "PUT",
            body: JSON.stringify({ ...task })
        }).then(response => {
            return response.json();
        }).then(sprint => {
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
        return fetch(domen + "Tasks").then(response => {
            return response.json();
        }).then(tasks => {
            dispatch(loadAllTasksToState(tasks))
        });
    }
}