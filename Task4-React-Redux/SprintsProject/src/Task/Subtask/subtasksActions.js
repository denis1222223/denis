import { fetchCall } from '../../Common/fetchConfig';

export const DELETE_SUBTASK = 'DELETE_SUBTASK';
export const ADD_SUBTASK = 'ADD_SUBTASK';
export const GET_ALL_SUBTASKS = 'GET_ALL_SUBTASKS';

export function deleteSubtaskFromState(subtaskId) {
    return {
        type: DELETE_SUBTASK,
        subtaskId
    };
}

export function deleteSubtask(subtaskId) {
    return dispatch => {
        return fetchCall("Subtasks/" + subtaskId, "DELETE").then(response => {
            return response.json();
        }).then(subtask => {
            dispatch(deleteSubtaskFromState(subtask.id));
        });
    }
}

export function addSubtaskToState(subtask) {
    return {
        type: ADD_SUBTASK,
        subtask
    };
}

export function addSubtask(subtask) {
    return dispatch => {
        return fetchCall("Subtasks", "POST", subtask).then(response => {
            return response.json();
        }).then(subtask => {
            dispatch(addSubtaskToState(subtask));
        });
    }
}

function loadAllSubtasksToState(subtasks) {
    return {
        type: GET_ALL_SUBTASKS,
        subtasks
    }
}

export function getAllSubtasks() {
    return dispatch => {
        return fetchCall("Subtasks", "GET").then(response => {
            return response.json();
        }).then(subtasks => {
            dispatch(loadAllSubtasksToState(subtasks))
        });
    }
}