import { DELETE_TASK, ADD_TASK, EDIT_TASK, DELETE_SUBTASK, ADD_SUBTASK } from 'redux/constants';

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

export function deleteSubtask(taskId, id) {
    return {
        type: DELETE_SUBTASK,
        payload: {taskId, id}
    };
}

export function addSubtask(subtask, taskId) {
    return {
        type: ADD_SUBTASK,
        payload: {subtask, taskId}
    };
}