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
        return fetchCall("Subtasks/" + subtaskId, "DELETE").then(id => {
            if (id) {
                dispatch(deleteSubtaskFromState(id));
            }
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
        return fetchCall("Subtasks", "POST", subtask).then(subtask => {
            if (subtask) {
                dispatch(addSubtaskToState(subtask));
            }
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
        return fetchCall("Subtasks", "GET").then(subtasks => {
            if (subtasks) {
                dispatch(loadAllSubtasksToState(subtasks))
            }
        });
    }
}