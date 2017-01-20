import { fetchCall, receive } from '../../Common/fetchCall';

export const DELETE_SUBTASK = 'DELETE_SUBTASK';
export const ADD_SUBTASK = 'ADD_SUBTASK';
export const GET_ALL_SUBTASKS = 'GET_ALL_SUBTASKS';

export function deleteSubtaskFromState(subtaskId) {
    return {
        type: DELETE_SUBTASK,
        subtaskId
    };
}

export function deleteSubtask(auth, subtaskId) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: "subtasks/" + subtaskId, method: "DELETE"}).then(id => {
            dispatch(receive(deleteSubtaskFromState(id)));
        });
    }
}

export function addSubtaskToState(subtask) {
    return {
        type: ADD_SUBTASK,
        subtask
    };
}

export function addSubtask(auth, subtask) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: 'subtasks', method: 'POST', body: subtask}).then(subtask => {
            dispatch(receive(addSubtaskToState(subtask)));
        });
    }
}

function loadAllSubtasksToState(subtasks) {
    return {
        type: GET_ALL_SUBTASKS,
        subtasks
    }
}

export function getAllSubtasks(auth) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: "subtasks", method: "GET"}).then(subtasks => {
            dispatch(receive(loadAllSubtasksToState(subtasks)));
        });
    }
}

export function getSubtasksByTaskId(auth, taskId) {
    return dispatch => {
        return fetchCall(dispatch, auth, {url: "subtasks/byTaskId/" + taskId, method: "GET"}).then(subtasks => {
            dispatch(receive(loadAllSubtasksToState(subtasks)));
        });
    }
}