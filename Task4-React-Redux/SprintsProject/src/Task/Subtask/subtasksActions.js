import { fetchCall, receive } from '../../Common/fetchCall';
import {showSpinner} from "../../Common/Spinner/spinnerActions";

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
        dispatch(showSpinner());
        return fetchCall("Subtasks/" + subtaskId, "DELETE").then(id => {
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

export function addSubtask(subtask) {
    return dispatch => {
        dispatch(showSpinner());
        return fetchCall("Subtasks", "POST", subtask).then(subtask => {
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

export function getAllSubtasks() {
    return dispatch => {
        dispatch(showSpinner());
        return fetchCall("Subtasks", "GET").then(subtasks => {
            dispatch(receive(loadAllSubtasksToState(subtasks)));
        });
    }
}

export function getSubtasksByTaskId(taskId) {
    return dispatch => {
        dispatch(showSpinner());
        return fetchCall("Subtasks/ByTaskId/" + taskId, "GET").then(subtasks => {
            dispatch(receive(loadAllSubtasksToState(subtasks)));
        });
    }
}