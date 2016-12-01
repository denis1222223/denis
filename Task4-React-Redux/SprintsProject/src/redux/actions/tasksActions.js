import { DELETE_TASK, ADD_TASK, EDIT_TASK } from 'redux/constants';

export function deleteTask(taskId) {
    return {
        type: DELETE_TASK,
        payload: taskId
    };
}

export function addTask(taskInfo) {
    return {
        type: ADD_TASK,
        payload: taskInfo
    };
}

export function editTask(taskId) {
    return {
        type: EDIT_TASK,
        payload: taskId
    };
}